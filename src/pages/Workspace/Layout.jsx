import React from 'react';

import WorkspaceNavbar from '@/components/organisms/Workspace/WorkspaceNavbar';
import WorkspacePanel from '@/components/organisms/Workspace/WorkspacePanel';
import WorkspaceSidebar from '@/components/organisms/Workspace/WorkspaceSidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

const WorkspaceLayout = ({ children }) => {
  return (
    <div className='h-screen flex flex-col'>
      <WorkspaceNavbar />
      <div className='flex h-[calc(100vh-40px)]'>
        <WorkspaceSidebar />
        <ResizablePanelGroup
          direction='horizontal'
          // autoSaveId="workspace-resize"
        >
          <ResizablePanel defaultSize={220} minSize={100} className='bg-slack-Medium'>
            <WorkspacePanel />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={20}>{children}</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
