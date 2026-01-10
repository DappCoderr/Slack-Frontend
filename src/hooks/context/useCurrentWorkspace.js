import { useContext } from 'react';

import WorkspaceContextProvider from '@/context/WorkspaceContext';

const useCurrentWorkspace = () => {
  return useContext(WorkspaceContextProvider);
};

export default useCurrentWorkspace;
