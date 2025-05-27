'use client';

import Link from 'next/link';
import Sidebar, { SidebarPosition } from '../Sidebar';
import { FaCalendar, FaHome, FaQrcode } from 'react-icons/fa';

import styles from './index.module.css';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const navigationLinks = [
  {
    href: '/',
    title: 'home',
    icon: <FaHome color="var(--primary)" size={25} />,
  },
  {
    href: '/meetings',
    title: 'meetings',
    icon: <FaCalendar color="var(--primary)" size={25} />,
  },
  {
    href: '#',
    title: 'qr code',
    icon: <FaQrcode color="var(--primary)" size={25} />,
  },
];

const NavigationSidebar = () => {
  const pathName = usePathname();
  return (
    <Sidebar sidebarPosition={SidebarPosition.LEFT}>
      <nav className={styles.navigationSidebar}>
        <ul className={styles.navigationList}>
          {navigationLinks.map((link) => (
            <li
              key={link.href}
              className={classNames(styles.navigationLink, {
                [styles.active]: pathName === link.href,
              })}
            >
              <Link href={link.href} title={link.title}>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Sidebar>
  );
};

export default NavigationSidebar;
