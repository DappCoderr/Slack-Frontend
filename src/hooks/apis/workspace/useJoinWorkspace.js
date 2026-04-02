import React from 'react'
import { joinWorkspaceRequest } from '@/apis/workspace'
import useAuth from '@/hooks/context/useAuth'
import { useMutation } from '@tanstack/react-query'

export const useJoinWorkspace = (workspaceId, joinCode) => {
    const {auth} = useAuth
    const { isPending, error, isSuccess, mutateAsync: joinWorkspaceMutation} = useMutation({
        mutationFn: () => joinWorkspaceRequest({workspaceId, joinCode, token: auth?.token})
    })
    return{
        isPending,
        isSuccess,
        joinWorkspaceMutation
    }
}