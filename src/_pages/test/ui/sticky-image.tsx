import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/shared/lib";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StickyImage = ({ imgUrl, isLast, isFirst }:any) => {
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
        // height: `calc(100svh - ${12 * 2}px)`,
        // height: isLast ? '150svh' : `100svh`,
        // top: IMG_PADDING,
        // scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden h-[100svh]"
    >
      <motion.div
        className={cn("absolute inset-0", !isFirst && "bg-neutral-950/70")}
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};
