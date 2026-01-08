import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateWorkspace } from '@/hooks/apis/workspace/useCreateWorkspace';
import useCreateWorkspaceModel from '@/hooks/context/useCreateWorkspaceModel';
import { useQueryClient } from '@tanstack/react-query';

const CreateWorkspaceModel = () => {
  const [workspaceName, setWorkspaceName] = useState('');

  const { openCreateWorkspaceModel, setOpenCreateWorkspaceModel } = useCreateWorkspaceModel();

  const { isPending, createWorkspaceMutation } = useCreateWorkspace();

  const navigate = useNavigate();

  const queryClient = useQueryClient

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createWorkspaceMutation({ name: workspaceName });
      console.log('Created the workspace', data);
      navigate(`/workspaces/${data._id}`);
      queryClient.invalidateQueries('fetchWorkspaces');
    } catch (error) {
      console.log('Not able to create a new workspace: ', error);
    } finally {
      setOpenCreateWorkspaceModel(false);
      setWorkspaceName('');
    }
  };

  return (
    <Dialog open={openCreateWorkspaceModel} onOpenChange={setOpenCreateWorkspaceModel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new Workspace</DialogTitle>
        </DialogHeader>

        <form className='space-y-4' onSubmit={handleFormSubmit}>
          <Input disabled={isPending} required minLength={3} placeholder='Workspace name (e.g. MyWorkspace, Blockchain)' value={workspaceName} onChange={(e) => setWorkspaceName(e.target.value)} />

          <div className='flex justify-end'>
            <Button type='submit' disabled={isPending}>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkspaceModel;
