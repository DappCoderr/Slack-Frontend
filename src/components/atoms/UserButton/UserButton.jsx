import React from 'react';

import { LogOutIcon, PencilIcon, SettingsIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import useAuth from '@/hooks/context/useAuth';
import useCreateWorkspaceModel from '@/hooks/context/useCreateWorkspaceModel';

const UserButton = () => {
  const { auth, logout } = useAuth();
  const { setOpenCreateWorkspaceModel } = useCreateWorkspaceModel();

  const handleLogOut = async () => {
    await logout();
    toast.success('Successfully Logout', {
      description: 'Redirecting to your signIn page',
    });
  };

  const handleOpenWorkspaceCreateModal = () => {
    setOpenCreateWorkspaceModel(true);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='outline-none relative'>
        <Avatar className='size-10 hover:opacity-65'>
          <AvatarImage src={auth?.user?.data?.avatar} />
          <AvatarFallback>{auth?.user?.data?.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleOpenWorkspaceCreateModal}>
          {' '}
          <PencilIcon /> Create Workspace
        </DropdownMenuItem>
        <DropdownMenuItem>
          {' '}
          <SettingsIcon /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogOut}>
          {' '}
          <LogOutIcon /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
