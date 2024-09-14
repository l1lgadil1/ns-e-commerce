import { StickyImage } from "./sticky-image";
import { OverlayCopy } from "./overlay-copy";

export const TextParallaxContent = ({ imgUrl, subheading, isLast, heading, children }:any) => (
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
