import { render, screen } from '@testing-library/react';
import Viewings, { ViewingsProps } from '.';

const defaultProps: ViewingsProps = {
  viewings: [
    {
      id: '1',
      companyName: 'Test Company',
      viewingDate: '2023-10-01T12:00:00Z',
    },
    {
      id: '2',
      companyName: 'Another Company',
      viewingDate: '2023-10-02T14:30:00Z',
    },
  ],
};

const setup = (props: Partial<ViewingsProps> = {}) =>
  render(<Viewings {...{ ...defaultProps, ...props }} />);

describe('Viewings', () => {
  it('renders a list of viewings', () => {
    setup();

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('renders an empty list when no viewings are provided', () => {
    setup({ viewings: [] });

    expect(screen.getByText('No viewings available')).toBeVisible();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
