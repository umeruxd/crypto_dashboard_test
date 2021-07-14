import Analytics from 'pages/analytics';
import Exchange from 'pages/exchange';
import Wallet from 'pages/wallet';
import ICOList from 'pages/ico-list';
import Settings from 'pages/settings';

import AnalyticsIcon from 'components/icons/analytics';
import ExchangeIcon from 'components/icons/exchange';
import WalletIcon from 'components/icons/wallet';
import IcoListIcon from 'components/icons/ico-list';
import SettingsIcon from 'components/icons/settings';

const DashboardRoutes = [
  {
    path: '/',
    name: 'Analytics',
    component: Analytics,
    icon: <AnalyticsIcon className="sidebar-icon" />,
    exact: true
  },

  {
    path: '/exchange',
    name: 'Exchange',
    component: Exchange,
    icon: <ExchangeIcon />,
    exact: true
  },

  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    icon: <WalletIcon />,
    exact: true
  },

  {
    path: '/ico-list',
    name: 'ICO List',
    component: ICOList,
    icon: <IcoListIcon />,
    exact: true
  },

  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    icon: <SettingsIcon />,
    exact: true
  }
];

export default DashboardRoutes;
