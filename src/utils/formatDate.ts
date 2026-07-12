const formatDateToYYMMDDHHMM = (input: Date | number): string => {
  const date = typeof input === 'number' ? new Date(input) : input;
  
  const year = String(date.getFullYear()).slice(-2);     // "2026" -> "26"
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export {
    formatDateToYYMMDDHHMM
}