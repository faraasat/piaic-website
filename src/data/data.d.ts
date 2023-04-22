import {
  ICourseBox,
  ILearningCard,
} from "@/app/(pages)/(available-courses)/(components)";

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

export type CourseKeyT =
  | "blockchain-development"
  | "cloud-development"
  | "artificial-intelligence"
  | "internet-of-things"
  | "innovation-track";

export interface IBlockColors {
  technical?: Array<string>;
  innovative: Array<string>;
  base?: string;
}

export interface IAvailableCoursesPageData {
  [key: CourseKeyT]: {
    title: string;
    desc: string;
    colors: IBlockColors;
    Img: any;
    programDets: string;
    technicalBlocks?: Array<ICourseBox>;
    innovationBlock: Array<ICourseBox>;
    learningItems: Array<Omit<ILearningCard, "reverse" | "baseColor">>;
  };
}
