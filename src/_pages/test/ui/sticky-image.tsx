import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const StickyImage = ({ imgUrl, isLast }:any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "start end"],
  });

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: `calc(100vh - ${12 * 2}px)`,
        height: isLast ? '150vh' : `100vh`,
        // top: IMG_PADDING,
        // scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};
