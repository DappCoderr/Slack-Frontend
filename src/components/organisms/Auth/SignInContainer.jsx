import React, { useEffect } from 'react';
import SignInCard from './SignInCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignin } from '@/hooks/apis/auth/useSignin';

const SignInContainer = () => {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [validationError, setValidationError] = useState(null);

  const { isPending, isSuccess, error, signinMutation } = useSignin();

  async function onSigninFormSubmit(e) {
    e.preventDefault();

    if (!signInForm.email || !signInForm.password) {
      console.error('All fields are required');
      setValidationError({ message: 'All fields are required' });
      return;
    }

    setValidationError(null);

    await signinMutation({
      email: signInForm.email,
      password: signInForm.password,
    });
  }

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate('/home');
      }, 3000);
    }
  }, [isSuccess, navigate]);

  return (
    <SignInCard
      isPending={isPending}
      isSuccess={isSuccess}
      error={error}
      validationError={validationError}
      onSigninFormSubmit={onSigninFormSubmit}
      signInForm={signInForm}
      setSignInForm={setSignInForm}
    />
  );
};

export default SignInContainer;
