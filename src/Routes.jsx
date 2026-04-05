import React from 'react';

import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from '@/components/molecules/ProtectedRoute/ProtectedRoute';
import SignInContainer from '@/components/organisms/Auth/SignInContainer';
import SignupContainer from '@/components/organisms/Auth/SignupContainer';
import Auth from '@/pages/Auth/Auth';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import JoinPage from '@/pages/Workspace/JoinPage';
import WorkspaceLayout from '@/pages/Workspace/Layout';

import Channel from './pages/Workspace/Channel';
import UserDetails from './pages/Workspace/UserDetails';

// prettier-ignore
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/auth/signin' element={
          <Auth>
            {' '} <SignInContainer /> {' '}
          </Auth>
        }
      />
      <Route path='/auth/signup' element={<Auth><SignupContainer /></Auth>}/>
      <Route path='/home' element={
          <ProtectedRoute>
            <Auth>
              <Home />
            </Auth>
          </ProtectedRoute>
        }
      />
      <Route path='/workspaces/:workspaceId' element={
          <ProtectedRoute>
            <WorkspaceLayout />
          </ProtectedRoute>
        }
      />
      <Route path='/workspaces/:workspaceId/channels/:channelId' element={
          <ProtectedRoute>
            <WorkspaceLayout><Channel/></WorkspaceLayout>
          </ProtectedRoute>} />
      <Route path='workspaces/join/:workspaceId' element={<JoinPage />}/> 
      <Route path="/workspace/:workspaceId/members/:memberId" element={<UserDetails/>}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
