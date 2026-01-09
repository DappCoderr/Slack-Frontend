import React from 'react';

import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from '@/components/molecules/ProtectedRoute/ProtectedRoute';
import SignInContainer from '@/components/organisms/Auth/SignInContainer';
import SignupContainer from '@/components/organisms/Auth/SignupContainer';
import Auth from '@/pages/Auth/Auth';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import WorkspaceLayout from '@/pages/Workspace/Layout';

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
      <Route path='/workspaces/:workspaceId/channels/:id' element={
          <ProtectedRoute>
            Channel
          </ProtectedRoute>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
