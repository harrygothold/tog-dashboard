import mockViewings from '../../../mockData/viewings.json';
import mockMeetings from '../../../mockData/meetings.json';
import { Meeting, Viewing } from '@/types';
import { delay } from '@/utils/api';

export const getViewings = async (): Promise<Viewing[]> =>
  delay(3000, mockViewings);

export const getMeetings = async (): Promise<Meeting[]> =>
  delay(3000, mockMeetings);
