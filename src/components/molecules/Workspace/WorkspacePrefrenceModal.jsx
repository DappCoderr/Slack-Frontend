import React, { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useDeleteWorkspace } from '@/hooks/apis/workspace/useDeleteWorkspace';
import useWorkspacePrefrenceModal from '@/hooks/context/useWorkspacePrefrenceModal';

const WorkspacePrefrenceModal = () => {
  const [workspaceId, setWorkspaceId] = useState(null);

  const { initialValue, openPrefrenceModel, setOpenPrefrenceModel, workspace } = useWorkspacePrefrenceModal();

  const { deleteWorkspaceMutaion } = useDeleteWorkspace(workspaceId);
  
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleDeleteWorkspace = async () => {
    try {
      await deleteWorkspaceMutaion();
      navigate('/home');
      queryClient.invalidateQueries('fetchWorkspaces');
      setOpenPrefrenceModel(false);
      toast.success('Successfully Deleted');
    } catch (error) {
      console.log('Error while deleting workspace: ', error);
    } finally {
      setOpenPrefrenceModel(false);
    }
  };

  useEffect(() => {
    setWorkspaceId(workspace?._id);
  }, [workspace]);

  return (
    <Dialog open={openPrefrenceModel} onOpenChange={setOpenPrefrenceModel}>
      <DialogContent className='p-0 bg-gray-50 overflow-hidden'>
        <DialogHeader className='p-4 border-b bg-white'>
          <DialogTitle></DialogTitle>
          <DialogDescription>Manage workspace preferences and settings.</DialogDescription>
        </DialogHeader>

        <div className='px-4 pb-4 flex flex-col gap-y-2'>
          <div className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'>
            <div className='flex items-center justify-between'>
              <p className='font-semibold text-xs'>Workspace Name</p>
              <p className='font-semibold text-xs hover:underline'>Edit</p>
            </div>
            <p className='font-semibold text-xs'>{initialValue}</p>
          </div>
          <Button onClick={handleDeleteWorkspace}>
            <TrashIcon />
            <p>Delete Workspace</p>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkspacePrefrenceModal;
