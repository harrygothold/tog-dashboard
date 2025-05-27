import Sidebar, { SidebarPosition, SidebarProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: SidebarProps = {
  sidebarPosition: SidebarPosition.LEFT,
};

const setup = (props: Partial<SidebarProps> = {}) =>
  render(
    <Sidebar {...defaultProps} {...props}>
      sidebar content
    </Sidebar>
  );

describe('Sidebar', () => {
  it('should should render without crashing', () => {
    setup();

    expect(screen.getByRole('complementary')).toBeVisible();
    expect(screen.getByText('sidebar content')).toBeVisible();
  });
});
