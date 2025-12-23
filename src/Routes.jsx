import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '@/pages/Auth/Auth';
import NotFound from '@/pages/NotFound';
import SignInContainer from '@/components/organisms/Auth/SignInContainer';
import SignupContainer from '@/components/organisms/Auth/SignupContainer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SignInContainer />
          </Auth>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <Auth>
            <SignupContainer />
          </Auth>
        }
      />
      <Route path="/home" element={<Auth>Home</Auth>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
