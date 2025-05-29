import { render, screen } from '@testing-library/react';
import MeetingRoomItem, { MeetingRoomItemProps } from '.';

const defaultProps: MeetingRoomItemProps = {
  meetingRoom: {
    id: '1',
    meetingRoomName: 'Conference Room A',
    imageUrl: 'https://example.com/image.jpg',
    capacity: 10,
    price: 100,
    isAvailable: true,
  },
};

const setup = (props: Partial<MeetingRoomItemProps> = {}) =>
  render(<MeetingRoomItem {...defaultProps} {...props} />);

describe('MeetingRoomItem', () => {
  it('renders meeting room details correctly', () => {
    setup();

    expect(screen.getByText('Conference Room A')).toBeVisible();
    expect(screen.getByText('10')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(
      screen.getByRole('img', { name: 'Conference Room A' })
    ).toBeVisible();
  });
});
