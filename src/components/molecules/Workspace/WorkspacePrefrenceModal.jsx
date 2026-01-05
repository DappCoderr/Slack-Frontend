import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import useWorkspacePrefrenceModal from '@/hooks/context/useWorkspacePrefrenceModal';
import { TrashIcon } from 'lucide-react';
import React from 'react';

const WorkspacePrefrenceModal = () => {
  const { initialValue, openPrefrenceModel, setOpenPrefrenceModel } =
    useWorkspacePrefrenceModal();
  return (
    <Dialog open={openPrefrenceModel} onOpenChange={setOpenPrefrenceModel}>
      <DialogContent className="p-0 bg-gray-50 overflow-hidden">
        <DialogHeader className="p-4 border-b bg-white">
          <DialogTitle></DialogTitle>
          <DialogDescription>
            Manage workspace preferences and settings.
          </DialogDescription>
        </DialogHeader>

        <div className="px-4 pb-4 flex flex-col gap-y-2">
          <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xs">
                Workspace Name
              </p>
              <p className="font-semibold text-xs hover:underline">Edit</p>
            </div>
            <p className='font-semibold text-xs'>{initialValue}</p>
          </div>
          <Button>
            <TrashIcon />
            <p>Delete Workspace</p>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkspacePrefrenceModal;
