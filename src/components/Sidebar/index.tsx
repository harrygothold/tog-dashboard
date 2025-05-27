import { PropsWithChildren } from 'react';

import styles from './index.module.css';
import classNames from 'classnames';

export const SidebarPosition = {
  LEFT: 'left',
  RIGHT: 'right',
} as const;

type SidebarPosition = (typeof SidebarPosition)[keyof typeof SidebarPosition];

export type SidebarProps = PropsWithChildren & {
  sidebarPosition: SidebarPosition;
};

const Sidebar = ({ children, sidebarPosition }: SidebarProps) => {
  return (
    <aside className={classNames(styles.sidebar, styles[sidebarPosition])}>
      {children}
    </aside>
  );
};

export default Sidebar;
