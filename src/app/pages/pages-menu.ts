import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Country-List',
    icon: 'nb-compose',
    link: '/pages/country-lists',
  },
  {
    title: 'Country Groups',
    icon: 'nb-e-commerce',
    link: '/pages/country-groups',
    home: true,
  },
  {
    title: 'Trademarks Classes',
    icon: 'nb-e-commerce',
    link: '/pages/trademark-classes',
    home: true,
  },
  {
    title: 'Trademark Types',
    icon: 'nb-e-commerce',
    link: '/pages/trademark-types',
    home: true,
  },
  {
    title: 'Companies & Agents',
    icon: 'nb-e-commerce',
    link: '/pages/companies/agents',
    home: true,
  },
  {
    title: 'Trademark Manager',
    icon: 'nb-e-commerce',
    link: '/pages/trademark-manager',
    home: true,
  }, {
    title: 'Logo Detector',
    icon: 'nb-e-commerce',
    link: '/pages/logo-detector',
    home: true,
  }, {
    title: 'Objection Manager',
    icon: 'nb-e-commerce',
    link: '/pages/objection_manager',
    home: true,
  },
  {
    title: 'Trademark Search',
    icon: 'nb-e-commerce',
    link: '/pages/trademark_search',
    home: true,
  },
  {
    title: 'Objection Search',
    icon: 'nb-e-commerce',
    link: '/pages/objection_search',
    home: true,
  },
  {
    title: 'World Map',
    icon: 'nb-location',
    link: '/pages/maps/gmaps',
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },

];
