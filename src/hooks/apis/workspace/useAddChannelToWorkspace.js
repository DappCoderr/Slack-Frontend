import { useMutation } from '@tanstack/react-query';

import { addChannelToWorkspace } from '@/apis/workspace';
import useAuth from '@/hooks/context/useAuth';

export const useAddChannelToWorkspace = (workspaceId) => {
  const { auth } = useAuth();

  // prettier-ignore
  const { isPending, isSuccess, error, mutateAsync: addChannelToWorkspaceMutation} = useMutation({
    mutationFn: ({workspaceId, channelName}) => addChannelToWorkspace({workspaceId, channelName, token: auth?.token}),
    onSuccess: (data) => {console.log("Successfully channel added to workspace", data)},
    onError: (error) => {console.log("Error while adding channel to workspace", error)},
  });

  return {
    isPending,
    isSuccess,
    error,
    addChannelToWorkspaceMutation,
  };
};
