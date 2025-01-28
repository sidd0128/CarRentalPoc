import { getWeek, getMonth, getYear } from 'date-fns';
import CarHistoryItem from '../types/CarHistoryItemProps';

export const getFilteredHistory = (history: CarHistoryItem[], timeFrame: 'week' | 'month' | 'year', selectedDate: string) => {
  const selectedDateObj = new Date(selectedDate);
  return history.filter(item => {
    const historyDate = new Date(item.startDate);
    if (timeFrame === 'week') {
      return getWeek(historyDate) === getWeek(selectedDateObj);
    } else if (timeFrame === 'month') {
      return getMonth(historyDate) === getMonth(selectedDateObj) && getYear(historyDate) === getYear(selectedDateObj);
    } else if (timeFrame === 'year') {
      return getYear(historyDate) === getYear(selectedDateObj);
    }
    return false;
  });
};
