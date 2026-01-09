import React, { useState } from 'react';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useCreateChannelModal from '@/hooks/context/useCreateChannelModal';

const CreateChannelModal = () => {
  const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();
  const [channelName, setChannelName] = useState();

  const handleClose = () => {
    setOpenCreateChannelModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={openCreateChannelModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a channel</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form className='space-y-4' onSubmit={handleFormSubmit}>
          <Input disabled={isPending} required minLength={3} placeholder='Channel name (e.g. Welcome)' value={channelName} onChange={(e) => setChannelName(e.target.value)} />

          <div className='flex justify-end mt-4'>
            <Button type='submit' disabled={isPending}>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateChannelModal;
