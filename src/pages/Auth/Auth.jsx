import SignUpCard from '@/components/organisms/Auth/signUpCard';
import React from 'react';

const Auth = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#5c3B58]">
      <div className="md:h-auto md:w-[420px]">
        <SignUpCard />
      </div>
    </div>
  );
};

export default Auth;
