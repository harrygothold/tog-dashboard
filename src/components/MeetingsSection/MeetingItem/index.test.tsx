import { render, screen } from '@testing-library/react';
import MeetingItem, { MeetingItemProps } from '.';

const defaultProps: MeetingItemProps = {
  meeting: {
    id: '1',
    meetingName: 'Test Meeting',
    meetingStart: '08:30',
    meetingEnd: '10:30',
  },
};

const setup = (props: Partial<MeetingItemProps> = {}) =>
  render(<MeetingItem {...defaultProps} {...props} />);

describe('MeetingItem', () => {
  it('displays the meeting name', () => {
    setup();

    expect(screen.getByText(defaultProps.meeting.meetingName)).toBeVisible();
  });

  it('displays the meeting start and end times', () => {
    setup();

    expect(
      screen.getByText(
        `${defaultProps.meeting.meetingStart} - ${defaultProps.meeting.meetingEnd}`
      )
    ).toBeVisible();
  });
});
