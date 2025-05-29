import mockViewings from '../../../mockData/viewings.json';
import mockMeetings from '../../../mockData/meetings.json';
import { Meeting, Viewing } from '@/types';
import { delay } from '@/utils/api';
import { mockLogger } from '@/utils/Logger';

export const getViewings = async (): Promise<Viewing[]> => {
  try {
    const data = await delay(3000, mockViewings);
    return data;
  } catch (error) {
    mockLogger('Error fetching viewings:', error);
    throw error;
  }
};

export const getMeetings = async (): Promise<Meeting[]> => {
  try {
    const data = await delay(3000, mockMeetings);
    return data;
  } catch (error) {
    mockLogger('Error fetching meetings:', error);
    throw error;
  }
};
