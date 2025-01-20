import { Props } from './interfaces';
import cn from 'classnames';
import { forwardRef } from 'react';

export const Input = forwardRef<any, Props>(({ className, errorMessage, ...rest }, ref) => {
  return (
    <>
      <input
        {...rest}
        ref={ref}
        className={cn('border text-gray-900 text-sm rounded-lg block w-full p-2.5', className)}
      />
      {errorMessage && <p className="text-[#e63946] text-start">{errorMessage}</p>}
    </>
  );
});
