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

const UserButton = () => {
  const { auth } = useAuth();

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
        <DropdownMenuItem>
          {' '}
          <LogOutIcon /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
