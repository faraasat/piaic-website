export interface ITechIcons {
  title: string;
  Icon: any;
}

export interface IInstructor {
  Img: any;
  name: string;
}

export interface IContentDetails {
  title: string;
  url: string;
  imgUrl: string;
}

export interface IContent {
  channel: string;
  details: Array<IContentDetails>;
}

export interface IBootcamp {
  title: string;
  subTitle: string;
  about: string;
  wave: boolean;
  baseBgColor: string;
  Illustration: any;
  techIcons: Array<ITechIcons>;
  instructors: {
    main: IInstructor;
    focus: Array<IInstructor>;
    small: Array<IInstructor>;
  };
  content: {
    urdu: IContent;
    english: IContent;
    link: string;
  };
}
