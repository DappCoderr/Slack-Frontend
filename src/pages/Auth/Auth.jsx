import SignUpCard from '@/components/organisms/Auth/signUpCard';
import React from 'react';

const Auth = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-slack">
      <div className="md:h-auto md:w-[420px]">
        <SignUpCard />
      </div>
    </div>
  );
};

export default Auth;
