import WorkspacePrefrenceModalContext from '@/context/WorkspacePrefrencesModal';
import { useContext } from 'react';

const useWorkspacePrefrenceModal = () => {
  return useContext(WorkspacePrefrenceModalContext);
};

export default useWorkspacePrefrenceModal;
