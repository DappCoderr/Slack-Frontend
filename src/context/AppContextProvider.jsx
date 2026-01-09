import combineContext from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { WorkspacePrefrencesModalContextProvider } from './WorkspacePrefrencesModalContext';
import { CreateChannelContextProvider } from './CreateChannelContext';

// prettier-ignore
export const AppContextProvider = combineContext(
    AuthContextProvider, 
    CreateWorkspaceContextProvider, 
    WorkspacePrefrencesModalContextProvider,
    CreateChannelContextProvider
);
