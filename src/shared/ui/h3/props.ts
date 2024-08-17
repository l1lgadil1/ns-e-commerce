import { DetailedHTMLProps, HTMLAttributes } from "react";

type Size = 's' |'xs' | 'm'
export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    size?:Size;
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: number;
}
