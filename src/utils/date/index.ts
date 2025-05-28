// converts date string  for example: 2025-05-27T15:28:17+00:00 to Tuesday 17th @ 11:28
export const convertServerDateStringToReadableDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  };

  return date
    .toLocaleDateString('en-GB', options)
    .replace(',', '')
    .replace(',', ' @');
};
