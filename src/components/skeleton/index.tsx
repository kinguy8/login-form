import cn from 'classnames';

interface Props {
  className: string;
}

export const Skeleton = ({ className }: Props) => {
  return (
    <div className="animate-pulse">
      <div className={cn('bg-primary rounded-3xl', className)}></div>
    </div>
  );
};
