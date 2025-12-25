import { fetchWorkspaceRequest } from '@/apis/workspace';
import { useQuery } from '@tanstack/react-query';

export const useFetchWorkspace = () => {
  const {
    isFetching,
    isSuccess,
    error,
    data: workspaces,
  } = useQuery({
    queryFn: () => fetchWorkspaceRequest,
    queryKey: 'fetchWorkspace',
    staleTime: 30000,
  });

  return {
    isFetching,
    isSuccess,
    error,
    workspaces,
  };
};
