import { DetailedHTMLProps, HTMLAttributes } from "react";

type Size = 's' | 'm'
type Modes = 'primary' | 'secondary'

export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    size?:Size;
    mode?:Modes
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: number;
}
