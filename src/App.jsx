import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';

import Auth from '@/pages/Auth/Auth';
import NotFound from '@/pages/NotFound';
import SignInContainer from '@/components/organisms/Auth/SignInContainer';
import SignupContainer from '@/components/organisms/Auth/SignupContainer';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
