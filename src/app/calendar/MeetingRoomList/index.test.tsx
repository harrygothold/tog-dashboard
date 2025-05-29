import { render, screen } from '@testing-library/react';
import MeetingRoomList, { MeetingRoomListProps } from '.';

const defaultProps: MeetingRoomListProps = {
  meetingRooms: [
    {
      id: '1',
      meetingRoomName: 'Conference Room A',
      imageUrl: 'https://example.com/image.jpg',
      capacity: 10,
      price: 100,
      isAvailable: true,
    },
    {
      id: '2',
      meetingRoomName: 'Conference Room B',
      imageUrl: 'https://example.com/image2.jpg',
      capacity: 20,
      price: 200,
      isAvailable: false,
    },
    {
      id: '3',
      meetingRoomName: 'Conference Room C',
      imageUrl: 'https://example.com/image3.jpg',
      capacity: 15,
      price: 150,
      isAvailable: true,
    },
  ],
};

const setup = (props: Partial<MeetingRoomListProps> = {}) =>
  render(<MeetingRoomList {...defaultProps} {...props} />);

describe('MeetingRoomList', () => {
  it('renders the availble meeting rooms', () => {
    setup();

    expect(screen.getByRole('list')).toBeVisible();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
