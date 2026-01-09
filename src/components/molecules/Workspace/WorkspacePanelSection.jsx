import React, { useState } from 'react';

import { PlusIcon } from 'lucide-react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

const WorkspacePanelSection = ({ children, label, onIconClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-col mt-2 px-2'>
      <div className='flex items-center gap-1 px-2 py-1 rounded-md group'>
        <Button onClick={() => setOpen(!open)} variant='transparent' className='p-1 h-6 w-6 flex items-center justify-center text-slate-300'>
          {open ? <FaCaretDown className='size-4' /> : <FaCaretRight className='size-4' />}
        </Button>
        <button onClick={() => setOpen(!open)} className='flex-1 text-left text-sm font-medium text-slate-200 px-2 py-1 rounded hover:text-white transition-colors truncate'>
          {label}
        </button>
        {onIconClick && (
          <Button variant='primary' size='sm' onClick={onIconClick} className='text-[#f9edffcc] transition opacity ml-auto p-0.5 text-sm size-6 hover:bg-slack-dark'>
            <PlusIcon className='size-4 text-[#f9edffcc]' />
          </Button>
        )}
      </div>
      {open && <div className='mt-1'>{children}</div>}
    </div>
  );
};

export default WorkspacePanelSection;
