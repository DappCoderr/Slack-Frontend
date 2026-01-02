import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useGetWorkspaceById } from '@/hooks/apis/workspace/useGetWorkspaceById';
import { Loader } from 'lucide-react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const WorkspaceSwitcher = () => {
  const navigate = useNavigate();
  const { workspaceId } = useParams;

  const workspaces = [
    {
      _id: {
        $oid: '693bff75a516ee171d41b41f',
      },
      name: 'Ethereum',
      description: 'This is Ethereum Blockchain Workspace',
      joinCode: 'CAFD15',
      channels: [
        {
          $oid: '693bff75a516ee171d41b428',
        },
        {
          $oid: '693c073bee5944a5052e8ae0',
        },
      ],
      members: [
        {
          userId: {
            $oid: '69345d7784bfcf63b45f2f09',
          },
          role: 'Admin',
          _id: {
            $oid: '693bff75a516ee171d41b423',
          },
        },
        {
          userId: {
            $oid: '693beaeee4f95f9607642dbf',
          },
          role: 'Member',
          _id: {
            $oid: '693c0745ee5944a5052e8aeb',
          },
        },
      ],
      createdAt: {
        $date: '2025-12-12T11:41:41.515Z',
      },
      updatedAt: {
        $date: '2025-12-12T12:15:01.642Z',
      },
      __v: 0,
    },
    {
      _id: {
        $oid: '693c084b0e2ff08ac201d61f',
      },
      name: 'OCB',
      description: 'This is OCB Workspace',
      joinCode: '638BE9',
      channels: [
        {
          $oid: '693c084c0e2ff08ac201d628',
        },
        {
          $oid: '693c08940e2ff08ac201d63c',
        },
      ],
      members: [
        {
          userId: {
            $oid: '693beaeee4f95f9607642dbf',
          },
          role: 'Admin',
          _id: {
            $oid: '693c084c0e2ff08ac201d623',
          },
        },
      ],
      createdAt: {
        $date: '2025-12-12T12:19:23.879Z',
      },
      updatedAt: {
        $date: '2025-12-12T12:20:36.731Z',
      },
      __v: 0,
    },
    {
      _id: {
        $oid: '69565112c83e8cf2339ea275',
      },
      name: 'MySpace',
      description: 'OCB is a first Yield Bearing NFT on Blockchain.',
      joinCode: '59E52E',
      channels: [
        {
          $oid: '69565112c83e8cf2339ea27e',
        },
      ],
      members: [
        {
          userId: {
            $oid: '694a5bcb602a8633df6499e5',
          },
          role: 'Admin',
          _id: {
            $oid: '69565112c83e8cf2339ea279',
          },
        },
      ],
      createdAt: {
        $date: '2026-01-01T10:48:50.115Z',
      },
      updatedAt: {
        $date: '2026-01-01T10:48:50.434Z',
      },
      __v: 0,
    },
    {
      _id: {
        $oid: '69565165c83e8cf2339ea287',
      },
      name: 'MySpace1',
      joinCode: '060CFA',
      channels: [
        {
          $oid: '69565165c83e8cf2339ea290',
        },
      ],
      members: [
        {
          userId: {
            $oid: '694a5bcb602a8633df6499e5',
          },
          role: 'Admin',
          _id: {
            $oid: '69565165c83e8cf2339ea28b',
          },
        },
      ],
      createdAt: {
        $date: '2026-01-01T10:50:13.277Z',
      },
      updatedAt: {
        $date: '2026-01-01T10:50:13.500Z',
      },
      __v: 0,
    },
  ];

  const handleNavigate = (id) => {
    console.log('id is: ', `/workspace/${id}`);
    navigate(`/workspace/${id}`);
  };

  //   const {isFetching, workspace} = useGetWorkspaceById(workspaceId)

  const isFetching = false;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 font-semibold text-slate-100 text-xl">
          {isFetching ? <Loader className="size-5 animate-spin" /> : <>D</>}
          {/* {isFetching ? <Loader className="size-5 animate-spin" /> : workspace?.name?.charAt(0).toUpperCase()} */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>All Workspaces</DropdownMenuLabel>
        <DropdownMenuGroup>
          {workspaces.map((workspace) => (
            <DropdownMenuItem
              key={workspace._id.$oid}
              className="cursor-pointer"
              onClick={() => handleNavigate(workspace._id.$oid)}
            >
              {workspace.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;
