import React from 'react';

import { useMutation } from '@tanstack/react-query';

import { joinWorkspaceRequest } from '@/apis/workspace';
import useAuth from '@/hooks/context/useAuth';

export const useJoinWorkspace = (workspaceId, joinCode) => {
  const { auth } = useAuth();
  const {
    isPending,
    error,
    isSuccess,
    mutateAsync: joinWorkspaceMutation,
  } = useMutation({
    mutationFn: (joinCode) => {
      console.log('Token:', auth?.token);
      return joinWorkspaceRequest({ workspaceId, joinCode, token: auth?.token });
    },
    onSuccess: () => {
      console.log('Workspace joined successfully');
    },
    onError: (error) => {
      console.log('Error in joining workspace', error);
    },
  });
  return {
    isPending,
    isSuccess,
    joinWorkspaceMutation,
  };
};
