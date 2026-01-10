import React, { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useAddChannelToWorkspace } from '@/hooks/apis/workspace/useAddChannelToWorkspace';
import useCreateChannelModal from '@/hooks/context/useCreateChannelModal';
import useCurrentWorkspace from '@/hooks/context/useCurrentWorkspace';
import { toast } from 'sonner';

const CreateChannelModal = () => {
  const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();
  const { isPending, addChannelToWorkspaceMutation } = useAddChannelToWorkspace();
  const [channelName, setChannelName] = useState('');

  const { currentWorkspace } = useCurrentWorkspace();

  const queryClient = useQueryClient();

  const handleClose = () => {
    setOpenCreateChannelModal(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await addChannelToWorkspaceMutation({ workspaceId: currentWorkspace?._id, channelName: channelName });
      toast.success("Channel created successfully")
      queryClient.invalidateQueries(`fetchWorkspaceById-${currentWorkspace?._id}`);
    } catch (error) {
      console.log('Not able to add channel to workspace: ', error);
      toast.error("Channel creation failed")
    } finally {
      setOpenCreateChannelModal(false);
      setChannelName('');
    }
  };

  return (
    <Dialog open={openCreateChannelModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a channel</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form className='space-y-4' onSubmit={handleFormSubmit}>
          <Input required minLength={3} placeholder='Channel name (e.g. Welcome)' value={channelName} onChange={(e) => setChannelName(e.target.value)} />

          <div className='flex justify-end mt-4'>
            <Button disabled={isPending} type='submit'>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateChannelModal;
