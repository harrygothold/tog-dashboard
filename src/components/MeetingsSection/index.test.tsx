import { render, screen } from '@testing-library/react';
import MeetingsSection, { MeetingsSectionProps } from '.';

const defaultProps: MeetingsSectionProps = {
  meetings: [
    {
      id: '1',
      meetingName: 'Test Meeting',
      meetingStart: '08:30',
      meetingEnd: '10:30',
    },
    {
      id: '2',
      meetingName: 'Test Meeting',
      meetingStart: '08:30',
      meetingEnd: '10:30',
    },
  ],
};

const setup = (props: Partial<MeetingsSectionProps> = {}) =>
  render(<MeetingsSection {...defaultProps} {...props} />);

describe('MeetingsSection', () => {
  it('renders without crashing', () => {
    setup();

    expect(screen.getByText('Meetings')).toBeVisible();
  });

  it('renders the meetings list', () => {
    setup();

    expect(screen.getAllByRole('listitem')).toHaveLength(
      defaultProps.meetings.length
    );
  });

  it('renders no meetings message when meetings array is empty', () => {
    setup({ meetings: [] });

    expect(screen.getByText('No meetings today!')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
