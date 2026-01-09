import React from 'react';

import CreateChannelModal from '@/components/molecules/CreateChannelModal/CreateChannelModal';
import CreateWorkspaceModel from '@/components/molecules/CreateWorkspaceModel/CreateWorkspaceModel';
import WorkspacePrefrenceModal from '@/components/molecules/Workspace/WorkspacePrefrenceModal';

const Model = () => {
  return (
    <>
      <CreateWorkspaceModel />
      <WorkspacePrefrenceModal />
      <CreateChannelModal />
    </>
  );
};

export default Model;
