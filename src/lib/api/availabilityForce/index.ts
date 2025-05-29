import { delay } from '@/utils/api';
import mockMeetings from '../../../mockData/meetingRooms.json';
import { MeetingRoom } from '@/types';

export const getMeetingRooms = async (): Promise<MeetingRoom[]> =>
  await delay(3000, mockMeetings);
