import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
// New includes
const PageList = React.lazy(() => import('./views/contents/pages/list'));
const PageCreate = React.lazy(() => import('./views/contents/pages/create'));
const AnnouncementList = React.lazy(() => import('./views/contents/announcements/list'));
const AnnouncementCreate = React.lazy(() => import('./views/contents/announcements/create'));
const BannerList = React.lazy(() => import('./views/contents/banners/list'));
const BannerCreate = React.lazy(() => import('./views/contents/banners/create'));
const FaqList = React.lazy(() => import('./views/contents/faqs/list'));
const FaqCreate = React.lazy(() => import('./views/contents/faqs/create'));
const HolidayList = React.lazy(() => import('./views/contents/holidays/list'));
const HolidayCreate = React.lazy(() => import('./views/contents/holidays/create'));
const Students = React.lazy(() => import('./views/students/list'));
const Teachers = React.lazy(() => import('./views/teachers/list'));
const Attendence = React.lazy(() => import('./views/attendences/list'));
const Certificates = React.lazy(() => import('./views/certificates/list'));
const Classes = React.lazy(() => import('./views/classes/list'));
const Courses = React.lazy(() => import('./views/courses/list'));
const Exams = React.lazy(() => import('./views/exams/list'));
const Hobbies = React.lazy(() => import('./views/hobby/list'));
const Leaves = React.lazy(() => import('./views/leaves/list'));
const Libraries = React.lazy(() => import('./views/library/list'));
const Payments = React.lazy(() => import('./views/payments/list'));
const Reports = React.lazy(() => import('./views/reports/list'));





const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/content/pages/create', name: 'Add Page', component: PageCreate },
  { path: '/content/pages', name: 'Pages', component: PageList },
  { path: '/content/announcements/create', name: 'Add Announcement & Notice', component: AnnouncementCreate },
  { path: '/content/announcements', name: 'Announcements & Notices', component: AnnouncementList },
  { path: '/content/banners/create', name: 'Add Banner', component: BannerCreate },
  { path: '/content/banners', name: 'Banners', component: BannerList },
  { path: '/content/faqs/create', name: 'Add FAQ', component: FaqCreate },
  { path: '/content/faqs', name: 'FAQs', component: FaqList },
  { path: '/content/holidays/create', name: 'Add Holiday', component: HolidayCreate },
  { path: '/content/holidays', name: 'Holidays', component: HolidayList }, 

  { path: '/students', name: 'Students', component: Students },
  { path: '/teachers', name: 'Teachers', component: Teachers },
  { path: '/attendence', name: 'Attendence', component: Attendence },
  { path: '/certificates', name: 'Certificates', component: Certificates },
  { path: '/classes', name: 'Classes', component: Classes },
  { path: '/courses', name: 'Courses', component: Courses },
  { path: '/exams', name: 'Exams', component: Exams },
  { path: '/hobbies', name: 'Hobbies', component: Hobbies },
  { path: '/leaves', name: 'Leaves', component: Leaves },
  { path: '/libraries', name: 'Libraries', component: Libraries },
  { path: '/payments', name: 'Payments', component: Payments },
  { path: '/reports', name: 'Reports', component: Reports },


  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
