export interface ICourseBox {
  title: string;
  desc: string;
  color: string;
}

export interface IBoxGrid {
  gridData: Array<ICourseBox>;
  heading: string;
  colors: Array[string];
  link?: string;
  hideHeading?: boolean;
}

export interface ILearningCard {
  id: string;
  title: string;
  Img?: any;
  desc: string;
  colorId: number;
  baseColor: string;
  reverse: boolean;
  technicalColor: string;
}

export interface ILearningPath {
  learningItems: Array<
    Omit<ILearningCard, "reverse" | "baseColor" | "technicalColor">
  >;
  baseColor: string;
  technicalColors: Array<string>;
}
