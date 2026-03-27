import React, { useState } from 'react';

import { CopyCheck, CopyIcon, RefreshCcwDotIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useResetJoinCode } from '@/hooks/apis/workspace/useResetJoinCode';

// import { useParams } from 'react-router-dom';

const WorkspaceInviteModal = ({ openInviteModal, setOpenInviteModal, workspaceName, joinCode, workspaceId }) => {
  const [copied, setCopied] = useState(false);
  // const {workspaceId} = useParams()
  const { resetJoinCodeMutation } = useResetJoinCode(workspaceId);

  const handleCopy = async () => {
    const inviteLink = `${joinCode}`;
    await navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    toast.success('Join Code is copied');
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  const handleResetJoinCode = async () => {
    try {
      await resetJoinCodeMutation();
      toast.success('Join Code reset successfully');
    } catch (error) {
      console.log(`Error is resetting the join code: `, error);
    }
  };

  return (
    <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite people to {workspaceName}</DialogTitle>
          <DialogDescription>Use the below code to invite </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col items-center justify-center gap-y-4'>
          <p className='font-bold text-4xl uppercase'>{joinCode}</p>
          <Button size='sm' variant='ghost' onClick={handleCopy}>
            Copy Link {copied ? <CopyCheck className='size-4 ml-2' /> : <CopyIcon className='size-4 ml-2' />}
          </Button>
          <a href={`/workspace/join/${workspaceId}`} target='_blank' rel='noreferrer' className='text-blue-500'>
            Redirect to join workspace
          </a>
        </div>
        <div className='flex items-center justify-center'>
          <Button size='sm' variant='ghost' onClick={handleResetJoinCode}>
            Reset Join Code <RefreshCcwDotIcon />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkspaceInviteModal;
