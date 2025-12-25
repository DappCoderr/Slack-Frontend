import { createWorkspaceRequest } from '@/apis/workspace';
import { useMutation } from '@tanstack/react-query';

export const useCreateWorkspace = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: createWorkspaceMutation,
  } = useMutation({
    mutationFn: createWorkspaceRequest(),
    onSuccess: (data) => {
      console.log('Successfully created workspace: ', data);
    },
    onError: (error) => {
      console.log('Error while creating new workspace: ', error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    createWorkspaceMutation,
  };
};
