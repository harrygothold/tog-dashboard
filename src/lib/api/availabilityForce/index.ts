import { delay } from '@/utils/api';
import mockMeetings from '../../../mockData/meetingRooms.json';
import { MeetingRoom } from '@/types';
import { mockLogger } from '@/utils/Logger';

export const getMeetingRooms = async (): Promise<MeetingRoom[]> => {
  try {
    const data = await delay(3000, mockMeetings);
    return data;
  } catch (error) {
    mockLogger('Error fetching meeting rooms:', error);
    throw error;
  }
};
