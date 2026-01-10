import React, { useState } from 'react';

import { CopyCheck, CopyIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const WorkspaceInviteModal = ({ openInviteModal, setOpenInviteModal, workspaceName, joinCode }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const inviteLink = `${window.location.origin}/join/${joinCode}`;
    await navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    toast.success('Join Code is copied');
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite people to {workspaceName}</DialogTitle>
          <DialogDescription>Use the below code to invite </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col items-center justify-center py-10 gap-y-4'>
          <p>{joinCode}</p>
          <Button size='sm' variant='ghost' onClick={handleCopy}>
            Copy Link {copied ? <CopyCheck className='size-4 ml-2' /> : <CopyIcon className='size-4 ml-2' />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkspaceInviteModal;
