import { useMutation } from '@tanstack/react-query';

import { deleteWorkspaceRequest } from '@/apis/workspace';
import useAuth from '@/hooks/context/useAuth';

export const useDeleteWorkspace = (workspaceId) => {
  const { auth } = useAuth();

  // prettier-ignore
  const { isPending, isSuccess, error, mutateAsync: deleteWorkspaceMutaion} = useMutation({
    mutationFn: () => deleteWorkspaceRequest({ workspaceId, token: auth?.token }),
    onSuccess: (data) => { console.log('Successfully delete the workspace: ', data) },
    onError: (error) => { console.log('Error while deleting workspace: ', error) },
  });

  return {
    isPending,
    isSuccess,
    error,
    deleteWorkspaceMutaion,
  };
};
