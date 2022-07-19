export const getDateFormatted = (myDate: string) => {
  const date = new Date(myDate);
  let dateFormatted = '';

  dateFormatted =
    months[date.getMonth() - 1] +
    ' ' +
    date.getDate() +
    ' ' +
    date.getFullYear();

  return dateFormatted;
};

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
