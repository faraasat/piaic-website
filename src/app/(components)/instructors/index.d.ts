import { IInstructor } from "../../(sections)";

export interface IInstructorsComponent {
  main: IInstructor;
  focus: Array<IInstructor>;
  small?: Array<IInstructor>;
}
