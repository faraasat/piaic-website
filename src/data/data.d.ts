export interface INavigationData {
  name: string;
  url: string;
  Icon?: any;
}

export interface INavigationWithDropDown extends INavigationData {
  dropdown?: boolean;
  dropdownItems?: Array<INavigationData>;
}

export interface IFooterQuickNavData {
  name: string;
  url: string;
}

export interface IFooterSocialsData {
  Icon: any;
  url: string;
}

export interface ISmallNavigationData {
  name: string;
  url: string;
  Icon: any;
}

export interface IAvailableCoursesData {
  title: string;
  content: string;
  Img: any;
  url: string;
  alt: string;
}
