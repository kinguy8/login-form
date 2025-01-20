import cn from 'classnames';
import { motion, AnimatePresence } from 'motion/react';

import { ToastInfo } from './interfaces';

interface Props {
  messageData: ToastInfo | null;
  onClose: () => void;
}

export const Toast = ({ messageData, onClose }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        key="toast"
        layout
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className={cn(
          'flex items-center w-full max-w-xs p-4 mb-4 bg-white rounded-lg fixed right-[2%] top-[2%] text-primary',
          { 'bg-[#bf0603]': messageData?.type === 'error' },
          { 'bg-[#049a8f]': messageData?.type === 'success' },
        )}
      >
        <div className="ms-3 text-sm font-normal">{messageData?.message ?? ''}</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
