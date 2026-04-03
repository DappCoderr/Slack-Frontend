import React from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { useJoinWorkspace } from '@/hooks/apis/workspace/useJoinWorkspace';

const JoinPage = () => {
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  const { joinWorkspaceMutation } = useJoinWorkspace(workspaceId);

  const handleAddMemberToWorkspace = async (joinCode) => {
    console.log('Adding member to workspace');
    try {
      await joinWorkspaceMutation(joinCode);
      toast.success('You have been added to workspace successfully');
      navigate(`/workspaces/${workspaceId}`);
    } catch (error) {
      console.log('Error in adding member to workspace', error);
      const errorMessage = error?.message || 'Failed to join workspace. Please check the code and try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className='h-[100vh] flex flex-col gap-y-8 items-center justify-center p-8 bg-white rounded-lg shadow-sm'>
      <div className='flex flex-col gap-y-4 items-center justify-center'>
        <div className='flex flex-col gap-y-2 items-center justify-center'>
          <h1 className='font-bold text-3xl'>Join Workspace</h1>
          <p>Enter the code you received to join the workspace</p>
        </div>
        <VerificationInput
          onComplete={handleAddMemberToWorkspace}
          length={6}
          classNames={{
            container: 'flex gap-x-2',
            character:
              'h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-md',
          }}
          autoFocus
        />
      </div>
      <div className='flex gap-x-4'>
        <Button size='lg' variant='outline'>
          <Link to={`/workspaces/${workspaceId}`}>Back to the workspace</Link>
        </Button>
      </div>
    </div>
  );
};

export default JoinPage;
