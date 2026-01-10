import { useMutation } from '@tanstack/react-query';

import { addMemberToWorkspace } from '@/apis/workspace';
import useAuth from '@/hooks/context/useAuth';

export const useAddMemberToWorkspace = (workspaceId) => {
  const { auth } = useAuth();

  // prettier-ignore
  const { isPending, isSuccess, error, mutateAsync: addMemberToWorkspaceMutation} = useMutation({
    mutationFn: (data) => addMemberToWorkspace({workspaceId, memberId: data?.memberId, role: data?.role, token: auth?.token}),
    onSuccess: (data) => {console.log("Successfully member added to workspace", data)},
    onError: (error) => {console.log("Error while adding member to workspace", error)},
  });

  return {
    isPending,
    isSuccess,
    error,
    addMemberToWorkspaceMutation,
  };
};
