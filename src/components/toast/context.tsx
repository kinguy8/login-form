import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ToastInfo } from './interfaces';

import { Toast } from './index';

type ToastContextType = {
  toastData: ToastInfo | null;
  showToast: (messageData: ToastInfo) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toastData, setToastData] = useState<ToastInfo | null>(null);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (toastData?.message) {
      timerId = setTimeout(() => setToastData(null), 6000);
    }
    return () => {
      clearTimeout(timerId as NodeJS.Timeout);
    };
  }, [toastData?.message]);

  const showToast = (messageData: ToastInfo): void => {
    setToastData(messageData);
  };

  const closeToast = (): void => {
    setToastData(null);
  };

  return (
    <ToastContext.Provider value={{ toastData, showToast }}>
      {children}
      {toastData?.message && <Toast messageData={toastData} onClose={closeToast} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};
