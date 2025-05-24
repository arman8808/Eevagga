function CopyrightYear() {
  const currentYear = new Date().getFullYear();
  
  return (
    <span>{currentYear}</span>
  );
}

export default CopyrightYear;