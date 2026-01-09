import React, { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useDeleteWorkspace } from '@/hooks/apis/workspace/useDeleteWorkspace';
import { useUpdateWorkspace } from '@/hooks/apis/workspace/useUpdateWorkspace';
import useWorkspacePrefrenceModal from '@/hooks/context/useWorkspacePrefrenceModal';
import useConfirm from '@/hooks/useConfirm';

const WorkspacePrefrenceModal = () => {
  const [workspaceId, setWorkspaceId] = useState(null);
  const [editOpen, setEditOpen] = useState(false);

  const { initialValue, openPrefrenceModel, setOpenPrefrenceModel, workspace } = useWorkspacePrefrenceModal();

  const { deleteWorkspaceMutaion } = useDeleteWorkspace(workspaceId);
  const { isPending, isSuccess, error, updateWorkspaceMutation } = useUpdateWorkspace(workspaceId);
  const [renameValue, setRenameValue] = useState(workspace?.name);
  const { ConfirmDialog, confimation } = useConfirm({ title: 'Do you want to delete the workspace?', message: 'This action cannot be undone' });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleDeleteWorkspace = async () => {
    try {
      const ok = await confimation();
      if (!ok) {
        return;
      }
      await deleteWorkspaceMutaion();
      navigate('/home');
      queryClient.invalidateQueries('fetchWorkspaces');
      setOpenPrefrenceModel(false);
      toast.success('Successfully Deleted');
    } catch (error) {
      console.log('Error while deleting workspace: ', error);
      toast.error('Error in deleting the workspace');
    } finally {
      setOpenPrefrenceModel(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateWorkspaceMutation(renameValue);
      queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);
      setOpenPrefrenceModel(false);
      toast.success('Successfully Updated Workspace name');
    } catch (error) {
      toast.error('Error in updating workspace name');
    }
  };

  useEffect(() => {
    setWorkspaceId(workspace?._id);
    if (workspace?.name) {
      setRenameValue(workspace.name);
    }
  }, [workspace]);

  // prettier-ignore
  return (
    <>
    <ConfirmDialog/>
    <Dialog open={openPrefrenceModel} onOpenChange={setOpenPrefrenceModel}>
    <DialogContent className="p-0 bg-gray-50 overflow-hidden">
      <DialogHeader className="p-4 border-b bg-white">
        <DialogTitle>Preferences</DialogTitle>
        <DialogDescription>
          Manage workspace preferences and settings.
        </DialogDescription>
      </DialogHeader>

      <div className="px-4 pb-4 flex flex-col gap-y-2">
        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogTrigger asChild>
            <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-xs">Workspace Name</p>
                <p className="font-semibold text-xs hover:underline">Edit</p>
              </div>
              <p className="font-semibold text-xs">{initialValue}</p>
            </div>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Rename Workspace</DialogTitle>
              <DialogDescription>
                Update the workspace name.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <Input
                value={renameValue}
                onChange={(e) => setRenameValue(e.target.value)}
                required
                autoFocus
                minLength={3}
                maxLength={50}
                disabled={isPending}
                placeholder="Workspace name e.g. Design Team"
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" disabled={isPending}>
                    Cancel
                  </Button>
                </DialogClose>

                <Button
                  variant="outline"
                  type="submit"
                  disabled={isPending}
                >
                  Save
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Button onClick={handleDeleteWorkspace} variant="destructive">
          <TrashIcon />
          <p>Delete Workspace</p>
        </Button>
      </div>
    </DialogContent>
    </Dialog>
  </>
);
};

export default WorkspacePrefrenceModal;
