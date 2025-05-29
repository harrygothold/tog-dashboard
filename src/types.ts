export type Viewing = {
  id: string;
  companyName: string;
  viewingDate: string;
};

export type Meeting = {
  id: string;
  meetingName: string;
  meetingStart: string;
  meetingEnd: string;
};

export type MeetingRoom = {
  id: string;
  meetingRoomName: string;
  imageUrl: string;
  capacity: number;
  price: number;
  isAvailable: boolean;
};
