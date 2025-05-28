import { render, screen } from '@testing-library/react';
import ViewingItem, { ViewingItemProps } from '.';

const defaultProps: ViewingItemProps = {
  viewing: {
    id: '1',
    companyName: 'Test Company',
    viewingDate: '2023-10-01T12:00:00Z',
  },
};

const setup = (props: Partial<ViewingItemProps> = {}) =>
  render(<ViewingItem {...{ ...defaultProps, ...props }} />);

describe('ViewingItem', () => {
  it('renders company name and formatted date', () => {
    setup();

    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('Sunday 1 Oct @ 12:00')).toBeInTheDocument();
  });
});
