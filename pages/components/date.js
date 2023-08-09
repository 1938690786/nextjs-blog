import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO("2020-01-02");
  return <div>{format(date, 'LLLL d, yyyy')}</div>;
}