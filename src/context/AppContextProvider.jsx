import combineContext from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { WorkspacePrefrencesModalContextProvider } from './WorkspacePrefrencesModalContext';

// prettier-ignore
export const AppContextProvider = combineContext(
    AuthContextProvider, 
    CreateWorkspaceContextProvider, 
    WorkspacePrefrencesModalContextProvider,
    CreateChannelContextProvider
);
