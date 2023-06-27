export const StartDateFormatter = (props) => {
  const { event_start_date } = props;
  const startDate = new Date(event_start_date);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(startDate);
};

export const EndDateFormatter = (props) => {
  const { event_end_date } = props;
  const endDate = new Date(event_end_date);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(endDate);
};
