import { DetailedHTMLProps, HTMLAttributes } from "react";

type Size = 's' | 'xs' | 'm'
type Modes = 'primary' | 'secondary'

export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    mode?: Modes;
    size?: Size
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: number;
}
