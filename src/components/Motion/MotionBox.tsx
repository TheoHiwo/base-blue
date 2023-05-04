import { chakra, HTMLChakraProps, shouldForwardProp } from "@chakra-ui/react";
import { HTMLMotionProps, isValidMotionProp, motion } from "framer-motion";
import { FC } from 'react';

type Merge<P, T> = Omit<P, keyof T> & T;
export type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

/**
   * <div> with Motion Framer and Chakra ui props .
   */
// const MotionBox: FC<MotionBoxProps> = motion(chakra.div);
const MotionBox: FC<MotionBoxProps> = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default MotionBox;
