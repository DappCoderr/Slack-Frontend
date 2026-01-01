import { useContext } from 'react';
import CreateWorkspaceContext from '@/context/CreateWorkspaceContext';

const useCreateWorkspaceModel = () => {
  return useContext(CreateWorkspaceContext);
};

export default useCreateWorkspaceModel;
