import { MenuItemsType } from '@thaihuuluong/dogwatcher-uikit';
import { ContextApi } from 'contexts/Localization/types';
import { Colors } from "../Pancake-uikit/theme/types";

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "Coming",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

export const configIsConnect: (t: ContextApi['t']) => MenuItemsType[] = () => [
  // {
  //   label: t('Admin Table'),
  //   icon: 'Marketplace',
  //   href: '/admintable',
  //   isBottomNav:false,
  //   showItemsOnMobile:false,
  //   items: [ 
     
  //   ]
  // },
  // {
  //   label: t('Project Table'),
  //   icon: 'Marketplace',
  //   href: '/projecttable',
  //   isBottomNav:false,
  //   showItemsOnMobile:false,
  //   items: [ 
     
  //   ]
  // },
]

export const configDisconnect: (t: ContextApi['t']) => MenuItemsType[] = () => [
  // {
  //   label: t('Admin Table'),
  //   icon: 'Marketplace',
  //   href: '/admintable',
  //   isBottomNav:false,
  //   showItemsOnMobile:false,
  //   items: [ 
     
  //   ]
  // },
  // {
  //   label: t('Project Table'),
  //   icon: 'Marketplace',
  //   href: '/projecttable',
  //   isBottomNav:false,
  //   showItemsOnMobile:false,
  //   items: [ 
     
  //   ]
  // },
]


export const dataRegisterLink = [
  {
    title: '',
    href: ''
  },
  {
    title: '',
    href: ''
  }
]

// export default configIsConnect 
