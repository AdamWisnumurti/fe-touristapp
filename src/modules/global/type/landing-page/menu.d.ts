import type { IconType } from 'react-icons';

export interface INavMenu {
  name: string;
  href?: string;
  subMenu?: { name: string; href: string }[];
}
export interface INavMenuPengembang {
  Icon: IconType;
  name: string;
  href?: string;
  subMenu?: { name: string; href: string }[];
}
