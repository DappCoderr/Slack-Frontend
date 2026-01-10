import combineContext from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { WorkspaceContextProvider } from './WorkspaceContext';
import { WorkspacePrefrencesModalContextProvider } from './WorkspacePrefrencesModalContext';

// prettier-ignore
export const AppContextProvider = combineContext(
    AuthContextProvider, 
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider, 
    WorkspacePrefrencesModalContextProvider,
    CreateChannelContextProvider
);
