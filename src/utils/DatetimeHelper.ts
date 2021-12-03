import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";

const DATE_FORMAT = "ddd D MMM";

dayjs.extend(isTomorrow);
dayjs.extend(isToday);
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: dayjs.ConfigType, format = DATE_FORMAT) => {
  return dayjs(date).format(format);
};

export const formatDateFocast = (
  date: dayjs.ConfigType,
  format = DATE_FORMAT
) => {
  const givenDate = dayjs.tz(date);
  return formatDate(givenDate, format);
};
