import cn from 'classnames';
import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader } from '@src/components/loader';

import { Props } from './interfaces';

export const Button = forwardRef<any, Props>(({ className, children, onClick, isLoading }, ref) => {
  const [isHover, setHover] = useState(false);
  return (
    <AnimatePresence>
      <motion.button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        ref={ref}
        className={cn(
          'border relative z-20 border-primary p-2.5 rounded-lg flex overflow-clip justify-center',
          className,
          {
            'text-primary': !isHover,
            'text-[#000]': isHover,
          },
        )}
        whileHover="hover"
        onClick={onClick}
      >
        <motion.div
          className={cn(
            'bg-primary rounded-full h-[1px] w-[1px] absolute',
            { 'opacity-0': !isHover },
            { 'opacity-100': isHover },
          )}
          animate={{
            scale: isHover ? 500 : 1,
          }}
          transition={{ ease: 'easeIn', duration: 0.3 }}
          exit={{ scale: 1 }}
        />
        <p className="z-10 font-bold">{children}</p>

        {isLoading && <Loader />}
      </motion.button>
    </AnimatePresence>
  );
});
