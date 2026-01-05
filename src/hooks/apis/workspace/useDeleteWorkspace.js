import { deleteWorkspaceRequest } from '@/apis/workspace';
import useAuth from '@/hooks/context/useAuth';
import { useMutation } from '@tanstack/react-query';

export const useDeleteWorkspace = () => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: deleteWorkspaceMutaion,
  } = useMutation({
    mutationFn: () => deleteWorkspaceRequest({ token: auth?.token }),
    onSuccess: (data) => {
      console.log('Successfully delete the workspace: ', data);
    },
    onError: (error) => {
      console.log('Error while deleting workspace: ', error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    deleteWorkspaceMutaion,
  };
};
