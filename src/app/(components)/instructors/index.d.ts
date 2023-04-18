import { IInstructor } from "../../(sections)";

export interface IInstructorsComponent {
  main: IInstructor;
  focus: Array<IInstructor>;
  small?: Array<IInstructor>;
}

export interface IInstructorBlock {
  name: string;
  Img: any;
  width: number;
  height: number;
}
