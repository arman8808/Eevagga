import { MenuItem } from "@mui/material";

export const generateMonthOptions = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const options = [];
  
  // Generate options for the next 2 years (including current month)
  for (let i = 0; i <= 24; i++) {
    const monthIndex = (currentMonth + i) % 12;
    const year = currentYear + Math.floor((currentMonth + i) / 12);
    
    // Format the value as "Month YYYY" (e.g., "May 2025")
    const monthName = months[monthIndex];
    const value = `${monthName} ${year}`;
    
    options.push(
      <MenuItem key={value} value={value}>
        {value}
      </MenuItem>
    );
  }
  
  return options;
};