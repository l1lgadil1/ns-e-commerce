import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const OverlayCopy = ({ subheading, heading }:any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      transition={{ duration: 300 }}
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex px-3 h-screen w-full flex-col items-center justify-center gap-4 text-white"
    >
      <p className="mb-2 text-center text-2xl font-[500] md:mb-4 md:text-4xl">
        {subheading}
      </p>
      <p className="text-center text-xl font-[400] md:text-3xl">{heading}</p>
    </motion.div>
  );
};
