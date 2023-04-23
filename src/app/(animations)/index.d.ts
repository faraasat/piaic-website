export interface IFlowAnimation {
  initialOpacity?: string | number;
  initialX?: string | number;
  initialY?: string | number;
  initialLeft?: string | number;
  initialRight?: string | number;
  initialTop?: string | number;
  initialBottom?: string | number;
  initialScale?: string | number;
  initialScaleX?: string | number;
  initialScaleY?: string | number;
  initialRotate?: string | number;
  initialRotateX?: string | number;
  initialRotateY?: string | number;
  finalOpacity?: string | number;
  finalX?: string | number;
  finalY?: string | number;
  finalLeft?: string | number;
  finalRight?: string | number;
  finalTop?: string | number;
  finalBottom?: string | number;
  finalScale?: string | number;
  finalScaleX?: string | number;
  finalScaleY?: string | number;
  finalRotate?: string | number;
  finalRotateX?: string | number;
  finalRotateY?: string | number;
  children?: JSX.Element | JSX.Element[];
  staggerChildren?: number;
  staggerDirection?: number;
  once?: boolean;
  transitionType?: string;
  transitionDuration: number;
  transitionDelay?: number;
  style?: React.CSSProperties;
  className?: string;
}
