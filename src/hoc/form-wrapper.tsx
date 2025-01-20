import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'motion/react';

interface Props {
  children: ReactNode;
}

export const FormWrapper = ({ children }: Props) => {
  if (localStorage.getItem('token')) {
    return <Navigate to="/profile" />;
  }

  return (
    <motion.div
      className="flex justify-center items-center"
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
