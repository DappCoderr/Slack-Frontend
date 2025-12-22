import React, { useState } from 'react';
import SignUpCard from './signUpCard';

const SignupContainer = () => {
  const [signupForm, setSignupForm] = useState({
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });
  return <SignUpCard signupForm={signupForm} setSignupForm={setSignupForm} />;
};

export default SignupContainer;
