import React from 'react';

import { cva } from 'class-variance-authority';
import { Link, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sidebarItemVariable = cva('flex items-center jutify-start gap-1.5 font-normal px-[20px] text-sm overflow-hidden w-full', {
  variants: {
    variant: {
      default: 'text-[#f9edffcc]',
      active: 'text-[#481350] bg-white/90 hover:bg-white/80',
    },
  },
  defaultVariants: 'default',
});

const SidebarItem = ({ label, id, icon: Icon, variant }) => {
  const { workspaceId } = useParams();
  return (
    <Button variant='transparent' size='sm' className={cn(sidebarItemVariable({ variant }))}>
      <Link to={`/workspaces/${workspaceId}/channels/${id}`} className='flex items-center gap-1.5 w-full'>
        <span className='w-5 flex justify-center'>
          <Icon className='size-3.5' />
        </span>
        <span className='text-sm truncate'>{label}</span>
      </Link>
    </Button>
  );
};

export default SidebarItem;
