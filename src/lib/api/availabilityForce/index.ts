import mockViewings from '../../../mockData/viewings.json';
import mockMeetings from '../../../mockData/meetings.json';
import { Meeting, Viewing } from '@/types';

export const getViewings = async (): Promise<Viewing[]> => mockViewings;

export const getMeetings = async (): Promise<Meeting[]> => mockMeetings;
