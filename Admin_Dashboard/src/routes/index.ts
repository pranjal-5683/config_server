import { lazy } from 'react';

const NavbarMenu = lazy(() => import('../pages/Form/NavbarMenu'));
const BannerHead = lazy(() => import('../pages/Form/BannerHead'));
const Contact = lazy(() => import('../pages/Form/Contact'));
const Features = lazy(() => import('../pages/Form/Features'));
const Gallery = lazy(() => import('../pages/Form/Gallery'));
const Services = lazy(() => import('../pages/Form/Services'));
const Team = lazy(() => import('../pages/Form/Team'));
const Testimonials = lazy(() => import('../pages/Form/Testimonials'));
const AboutUs = lazy(() => import('../pages/Form/AboutUs'));

const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));

const coreRoutes = [
  // {
  //   path: '/calendar',
  //   title: 'Calender',
  //   component: Calendar,
  // },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/navbar',
    title: 'Edit Navbar and Menu Page',
    component: NavbarMenu,
  },
  {
    path: '/forms/bannerhead',
    title: 'Edit Banner and Heading Page',
    component: BannerHead,
  },
  {
    path: '/forms/about',
    title: 'Edit About Page',
    component: AboutUs,
  },
  {
    path: '/forms/contact',
    title: 'Edit Contact Us Page',
    component: Contact,
  },
  {
    path: '/forms/features',
    title: 'Edit Features Page',
    component: Features,
  },
  {
    path: '/forms/gallery',
    title: 'Edit Gallery Page',
    component: Gallery,
  },
  {
    path: '/forms/services',
    title: 'Edit Services Page',
    component: Services,
  },
  {
    path: '/forms/team',
    title: 'Edit Team Page',
    component: Team,
  },
  {
    path: '/forms/testimonials',
    title: 'Edit Testimonials Page',
    component: Testimonials,
  },

  // {
  //   path: '/forms/form-layout',
  //   title: 'Form Layouts',
  //   component: FormLayout,
  // },
  // {
  //   path: '/tables',
  //   title: 'Tables',
  //   component: Tables,
  // },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  // {
  //   path: '/chart',
  //   title: 'Chart',
  //   component: Chart,
  // },
  // {
  //   path: '/ui/alerts',
  //   title: 'Alerts',
  //   component: Alerts,
  // },
  // {
  //   path: '/ui/buttons',
  //   title: 'Buttons',
  //   component: Buttons,
  // },
];

const routes = [...coreRoutes];
export default routes;
