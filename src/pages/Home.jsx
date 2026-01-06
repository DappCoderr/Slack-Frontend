import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import UserButton from '@/components/atoms/UserButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspace/useFetchWorkspace';
import useCreateWorkspaceModel from '@/hooks/context/useCreateWorkspaceModel';

const Home = () => {
  const navigate = useNavigate();
  const { isFetching, workspaces } = useFetchWorkspace();
  const { setOpenCreateWorkspaceModel } = useCreateWorkspaceModel();

  useEffect(() => {
    if (isFetching) return;
    if (workspaces.length === 0 || !workspaces) {
      console.log('No workspace found, creating one');
      setOpenCreateWorkspaceModel(true);
    } else {
      navigate(`/workspaces/${workspaces[0]._id}`);
    }
  }, [isFetching, workspaces, navigator]);

  return <UserButton />;
};

export default Home;
