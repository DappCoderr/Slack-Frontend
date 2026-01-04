import combineContext from '@/utils/combineContext';
import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { WorkspacePrefrencesModalProvider } from './WorkspacePrefrencesModal';

export const AppContextProvider = combineContext(
  AuthContextProvider,
  CreateWorkspaceContextProvider,
  WorkspacePrefrencesModalProvider
);
