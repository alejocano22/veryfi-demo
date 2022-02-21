import { i18nCommon } from '@i18n';

export const getNavbarNavigation = (locale: string) => {
  const {
    billingNavbar,
    dashboardNavbar,
    inboxNavbar,
    bankFeedsNavbar,
    myTeamNavbar,
    reportsNavbar,
    fileStorageNavbar,
    projectsNavbar,
    timeSheetsNavbar,
    logbookNavbar,
    settings,
  } = i18nCommon[locale];

  return [
    { name: billingNavbar, href: '#' },
    { name: dashboardNavbar, href: '#' },
    { name: inboxNavbar, href: '#' },
    { name: bankFeedsNavbar, href: '#' },
    { name: myTeamNavbar, href: '#' },
    { name: reportsNavbar, href: '#' },
    { name: fileStorageNavbar, href: '#' },
    { name: projectsNavbar, href: '#' },
    { name: timeSheetsNavbar, href: '#' },
    { name: logbookNavbar, href: '#' },
    { name: settings, href: '#' },
  ];
};
