import { cva } from 'class-variance-authority';
import { Link } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import useCurrentWorkspace from '@/hooks/context/useCurrentWorkspace';
import { cn } from '@/lib/utils';

const userItemVariants = cva(
  'flex items-center gap-1.5 justify-start font-normal h-7 px-4 text-sm overflow-hidden',
  {
    variants: {
      variant: {
        default: 'text-[#f9edffcc]',
        acive: 'text-[#481350] bg-white/90 hover:bg-white/80',
      },
    },
    defaultVariants: 'default',
  }
);

const UserItem = ({ memberId, lable = 'member', image, variant = 'default' }) => {
  const { currentWorkspace } = useCurrentWorkspace();
  return (
    <Button className={cn(userItemVariants({ variant }))} variant='transparent' size='sm' asChild>
      <Link
        to={`/workspace/${currentWorkspace?._id}/members/${memberId}`}
        // className='flex items-center gap-2 w-full'
      >
        <Avatar>
          <AvatarImage src={image} className='rounded-md' />
          <AvatarFallback className='rounded-md bg-sky-500 text-white'>
            {lable.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className='text-sm truncate'> {lable} </span>
      </Link>
    </Button>
  );
};

export default UserItem;
