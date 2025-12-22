import { Route, Routes } from 'react-router-dom';
import Auth from '@/pages/Auth/Auth';
import SignInCard from '@/components/organisms/Auth/SignInCard';
import NotFound from '@/pages/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
              <SignInCard />
            </Auth>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <Auth>
              <SignupContainer/>
            </Auth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
