import UserButton from '@/components/atoms/UserButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspace/useFetchWorkspace';
import React, { useEffect } from 'react';

const Home = () => {
  const { isFetching, workspaces } = useFetchWorkspace();

  useEffect(() => {
    if (isFetching) return;
    if (workspaces.length === 0 || !workspaces) {
      console.log('No workspace found, creating one');
    }
  }, [isFetching, workspaces]);

  return <UserButton />;
};

export default Home;
