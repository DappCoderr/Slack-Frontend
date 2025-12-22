import { Route, Routes } from 'react-router-dom';
import Auth from '@/pages/Auth/Auth';
import SignInCard from '@/components/organisms/Auth/SignInCard';
import SignUpCard from '@/components/organisms/Auth/signUpCard';

function App() {
  return (
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
            <SignUpCard />
          </Auth>
        }
      />
    </Routes>
  );
}

export default App;
