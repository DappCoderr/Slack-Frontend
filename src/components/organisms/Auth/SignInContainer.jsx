import React from 'react';
import SignInCard from './SignInCard';
import { useState } from 'react';

const SignInContainer = () => {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });
  return <SignInCard signInForm={signInForm} setSignInForm={setSignInForm} />;
};

export default SignInContainer;
