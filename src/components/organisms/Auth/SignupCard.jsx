import React from 'react';

import { LucideLoader2, TriangleAlert } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const SignUpCard = ({ error, isSuccess, isPending, validationError, onSignupFormSubmit, signupForm, setSignupForm }) => {
  const navigate = useNavigate();

  return (
    <Card className='w-full h-full'>
      <CardHeader>
        <CardTitle className='text-lg'>Sign Up</CardTitle>
        <CardDescription>Sign up to access your account</CardDescription>

        {validationError && (
          <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
            <TriangleAlert className='size-5' />
            <p>{validationError.message}</p>
          </div>
        )}

        {error && (
          <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
            <TriangleAlert className='size-5' />
            <p>{error.message}</p>
          </div>
        )}

        {isSuccess && (
          <div className='bg-primary/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary mb-5'>
            <FaCheck className='size-5' />
            <p>
              Successfully signed up. You will be redirected to the login page in a few seconds.
              <LucideLoader2 className='animate-spin ml-2' />
            </p>
          </div>
        )}
      </CardHeader>

      <CardContent>
        <form className='space-y-3' onSubmit={onSignupFormSubmit}>
          <Input
            name='userName'
            placeholder='User name'
            value={signupForm.userName}
            onChange={(e) => {
              setSignupForm({ ...signupForm, userName: e.target.value });
            }}
            required
            disabled={isPending}
          />

          <Input
            name='email'
            type='email'
            placeholder='Email'
            value={signupForm.email}
            onChange={(e) => {
              setSignupForm({ ...signupForm, email: e.target.value });
            }}
            required
            disabled={isPending}
          />

          <Input
            name='password'
            type='password'
            placeholder='Password'
            value={signupForm.password}
            onChange={(e) => {
              setSignupForm({ ...signupForm, password: e.target.value });
            }}
            required
            disabled={isPending}
          />

          <Input
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            value={signupForm.confirmPassword}
            onChange={(e) => {
              setSignupForm({ ...signupForm, confirmPassword: e.target.value });
            }}
            required
          />

          <Button disabled={isPending} type='submit' size='lg' className='w-full'>
            Continue
          </Button>
        </form>

        <Separator className='my-5' />

        <p className='text-sm text-muted-foreground'>
          Already have an account?{' '}
          <span className='hover:underline text-sky-600 cursor-pointer' onClick={() => navigate('/auth/signin')}>
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
