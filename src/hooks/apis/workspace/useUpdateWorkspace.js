import { useMutation } from '@tanstack/react-query';

import { updateWorkspaceRequest } from '@/apis/workspace';
import useAuth from '@/hooks/context/useAuth';

// prettier-ignore
export const useUpdateWorkspace = (workspaceId) => {
  const { auth } = useAuth();
  const {isPending, isSuccess, error, mutateAsync: updateWorkspaceMutation} = useMutation({
    mutationFn: (name) => updateWorkspaceRequest({ workspaceId, name, token: auth?.token }),
    onSuccess: (data) => { console.log('Successfully updated workspace: ', data) },
    onError: (error) => { console.log('Error while updating workspace: ', error) },
  });

  return {
    isPending,
    isSuccess,
    error,
    updateWorkspaceMutation,
  };
};
