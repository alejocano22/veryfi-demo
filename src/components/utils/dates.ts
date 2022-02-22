export const createDate = (
  days: number,
  months: number,
  years: number,
  customDate?: Date
) => {
  let date = customDate ? customDate : new Date();
  date.setDate(date.getDate() + days);
  date.setMonth(date.getMonth() + months);
  date.setFullYear(date.getFullYear() + years);
  return date;
};
