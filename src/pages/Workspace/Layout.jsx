import React from 'react';
import WorkspaceSidebar from '@/components/organisms/Workspace/WorkspaceSidebar';
import WorkspaceNavbar from '@/components/organisms/Workspace/WorkspaceNavbar';

const WorkspaceLayout = ({ children }) => {
  return (
    <div className="h-[100vh]">
      <WorkspaceNavbar />
      <div className="flex h-[calc(100vh-40px)]">
        <WorkspaceSidebar />
        Workspace
        {children}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
