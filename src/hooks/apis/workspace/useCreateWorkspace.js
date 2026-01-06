import { useMutation } from '@tanstack/react-query';

import { createWorkspaceRequest } from '@/apis/workspace';
import useAuth from '@/hooks/context/useAuth';

export const useCreateWorkspace = () => {
  const { auth } = useAuth();

  // prettier-ignore
  const { isPending, isSuccess, error, mutateAsync: createWorkspaceMutation } = useMutation({
    mutationFn: (data) => createWorkspaceRequest({ ...data, token: auth?.token }),
    onSuccess: (data) => { console.log('Successfully created workspace: ', data) },
    onError: (error) => { console.log('Error while creating new workspace: ', error) },
  });

  return {
    isPending,
    isSuccess,
    error,
    createWorkspaceMutation,
  };
};
