import React from 'react';
import WorkspaceSidebar from '@/components/organisms/Workspace/WorkspaceSidebar';

const WorkspaceLayout = ({ children }) => {
  return (
    <div className="h-[100vh]">
      <div className="flex h-[calc(100vh-10px)]">
        <WorkspaceSidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
