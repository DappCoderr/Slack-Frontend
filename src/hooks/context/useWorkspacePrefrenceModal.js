import { useContext } from 'react';

import WorkspacePrefrenceModalContext from '@/context/WorkspacePrefrencesModalContext';

const useWorkspacePrefrenceModal = () => {
  return useContext(WorkspacePrefrenceModalContext);
};

export default useWorkspacePrefrenceModal;
