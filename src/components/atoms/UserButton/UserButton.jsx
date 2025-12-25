import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useAuth from '@/hooks/context/useAuth';
import { LogOutIcon, SettingsIcon } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

const UserButton = () => {
  const { auth, logout } = useAuth();

  const handleLogOut = async () => {
    await logout();
    toast.success('Successfully Logout', {
      description: 'Redirecting to your signIn page',
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-65">
          <AvatarImage src={auth?.user?.data?.avatar} />
          <AvatarFallback>
            {auth?.user?.data?.username[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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
