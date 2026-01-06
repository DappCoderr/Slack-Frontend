import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSignup } from '@/hooks/apis/auth/useSignup';

import SignUpCard from './signUpCard';

const SignupContainer = () => {
  const [signupForm, setSignupForm] = useState({
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const [validationError, setValidationError] = useState(null);

  const { isPending, isSuccess, error, signupMutation } = useSignup();

  async function onSignupFormSubmit(e) {
    e.preventDefault();

    console.log('signup email', signupForm.email);
    console.log('signup username', signupForm.userName);
    console.log('sign password', signupForm.password);

    if (!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.userName) {
      console.error('All fields are required');
      setValidationError({ message: 'All fields are required' });
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      console.error('Passwords do not match');
      setValidationError({ message: 'Passwords do not match' });
      return;
    }

    setValidationError(null);

    await signupMutation({
      email: signupForm.email,
      password: signupForm.password,
      username: signupForm.userName,
    });
  }

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate('/auth/signin');
      }, 3000);
    }
  }, [isSuccess, navigate]);

  return <SignUpCard error={error} isSuccess={isSuccess} isPending={isPending} validationError={validationError} signupForm={signupForm} setSignupForm={setSignupForm} onSignupFormSubmit={onSignupFormSubmit} />;
};

export default SignupContainer;
