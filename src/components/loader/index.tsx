import { motion } from 'motion/react';

const spinTransition = {
  repeat: Infinity,
  ease: 'easeInOut',
  duration: 1,
};

export const Loader = () => {
  return (
    <div className="relative w-[20] h-[20] ml-2">
      <motion.span
        className="absolute box-border rounded-full w-[17px] h-[17px] block border-t-[#141414] border-[3px] border-solid border-[#eee]"
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};
