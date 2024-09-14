import { StickyImage } from "./sticky-image";
import { OverlayCopy } from "./overlay-copy";
import { ReactNode } from "react";

interface IProps{
  imgUrl:string;
  subheading:string;
  isLast?:boolean;
  heading:string;
  children?:ReactNode;
}
export const TextParallaxContent = ({ imgUrl, subheading, isLast, heading, children }:IProps) => (
  <div
    style={{
      // paddingLeft: IMG_PADDING,
      // paddingRight: IMG_PADDING,
    }}
  >
    <div className="relative">
      <StickyImage isLast={isLast} imgUrl={imgUrl} />
      <OverlayCopy heading={heading} subheading={subheading} />
    </div>
    {children}
  </div>
);
