import React from 'react';

import { AlertTriangleIcon, HashIcon, Loader, MessageSquareTextIcon, SendHorizonalIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import SidebarItem from '@/components/atoms/SidebarItem/SidebarItem';
import WorkspacePanelHeader from '@/components/molecules/Workspace/WorkspacePanelHeader';
import WorkspacePanelSection from '@/components/molecules/Workspace/WorkspacePanelSection';
import { useGetWorkspaceById } from '@/hooks/apis/workspace/useGetWorkspaceById';
import useCreateChannelModal from '@/hooks/context/useCreateChannelModal';

const WorkspacePanel = () => {
  const { workspaceId } = useParams();
  const { workspace, isFetching, isSuccess } = useGetWorkspaceById(workspaceId);
  const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();

  const handleChannelModal = () => {
    setOpenCreateChannelModal(true);
  };

  if (isFetching) {
    return (
      <div className='flex flex-col gap-y-2 h-full items-center justify-center text-white'>
        <Loader className='animate-spin size-6 text-white' />
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className='flex flex-col gap-y-2 h-full items-center justify-center text-white'>
        <AlertTriangleIcon className='size-6 text-white' />
        Something went wrong
      </div>
    );
  }

  return (
    <div className='flex flex-col h-full bg-slack-Medium text-white'>
      <WorkspacePanelHeader workspace={workspace} />
      <div className='px-3 py-2 overflow-y-auto flex-1'>
        <SidebarItem label={'Threads'} icon={MessageSquareTextIcon} id={'threads'} variant={'active'} />
        <SidebarItem label={'Draft & Sends'} icon={SendHorizonalIcon} id={'draft and send'} variant={'default'} />
        <WorkspacePanelSection label={'channels'} onIconClick={handleChannelModal}>
          {workspace?.channels?.map((channel) => (
            <SidebarItem key={channel._id} label={channel?.name} icon={HashIcon} id={channel?._id} variant={'default'} />
          ))}
        </WorkspacePanelSection>
      </div>
    </div>
  );
};

export default WorkspacePanel;
