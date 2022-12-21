export const dateRender = (date: Date) => (
  `${date.toLocaleString('en-US', { month: 'long' })} ${date.getFullYear()}`
);

export const dateRangeRender = ({ start, end } : { start: Date, end?: Date }) => (
  end
    ? `(${dateRender(start)} - ${dateRender(end)})`
    : `(${dateRender(start)} - Present)`
);
