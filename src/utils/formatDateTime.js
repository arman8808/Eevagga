export function formatDateTime(isoString, options = {}) {
  const date = new Date(isoString);

  // Default formatting options
  const defaultOptions = {
    dateStyle: "long", // e.g., "May 7, 2025"
    timeStyle: "short", // e.g., "4:51 PM"
    timeZone: "local", // Use user's local timezone
    includeSeconds: false, // Whether to show seconds
    weekday: false, // Whether to show day of week
  };

  // Merge user options with defaults
  const mergedOptions = { ...defaultOptions, ...options };

  try {
    // Format date part
    const dateFormatter = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: mergedOptions.weekday ? "long" : undefined,
    });

    // Format time part
    const timeFormatter = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
      second: mergedOptions.includeSeconds ? "2-digit" : undefined,
      hour12: true,
    });

    const formattedDate = dateFormatter.format(date);
    const formattedTime = timeFormatter.format(date);

    return `${formattedDate} at ${formattedTime}`;
  } catch (error) {
    // Fallback for browsers that don't support Intl.DateTimeFormat options
    return date.toLocaleString();
  }
}
