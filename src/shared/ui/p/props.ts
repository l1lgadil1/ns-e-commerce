import { DetailedHTMLProps, HTMLAttributes } from "react";

type Sizes = 's' | 'm' | 'l'
export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    color?:string;
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: number;
    size?:Sizes
}
