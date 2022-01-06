import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {
  DATE_STANDARD_FORMAT,
  DATE_TIME_STANDARD_FORMAT,
} from '../../../utils/constant';

dayjs.extend(customParseFormat);

const DateTimeFormat = ({ date, currentFormat, toFormat, ...props }) => {
  if (!currentFormat) currentFormat = DATE_TIME_STANDARD_FORMAT;
  if (!toFormat) toFormat = DATE_STANDARD_FORMAT;

  return <>{dayjs(date, currentFormat).format(toFormat)}</>;
};

export default DateTimeFormat;
