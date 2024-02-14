import dayjs from 'dayjs';

export const getDeadlineMsg = deadline => {
  const daysRest = dayjs(deadline).diff(dayjs(), 'day');
  const isToday = dayjs().isSame(deadline, 'day');

  const msg = isToday
    ? 'Today is deadline'
    : daysRest < 0
    ? 'Deadline has passed'
    : 'Deadline';

  return { msg, isToday, daysRest };
};
