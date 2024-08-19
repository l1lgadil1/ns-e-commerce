import { DetailedHTMLProps, HTMLAttributes } from "react";

type Sizes = 's' | 'm' | 'l'
type Modes = 'primary' | 'secondary'

export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    color?:string;
    mode?:Modes;
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: number;
    size?:Sizes
}
