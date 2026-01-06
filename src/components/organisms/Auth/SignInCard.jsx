import { LucideLoader2, TriangleAlert } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const SignInCard = ({ isPending, isSuccess, error, validationError, onSigninFormSubmit, signInForm, setSignInForm }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg'>SignIn</CardTitle>
        <CardDescription>Sign In to access your account</CardDescription>

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
              Successfully signed in. You will be redirected to the home page in a few seconds.
              <LucideLoader2 className='animate-spin ml-2' />
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form className='space-y-3' onSubmit={onSigninFormSubmit}>
          <Input
            name='email'
            type='email'
            placeholder='Email'
            value={signInForm.email}
            onChange={(e) => {
              setSignInForm({ ...signInForm, email: e.target.value });
            }}
            required
            disabled={isPending}
          />
          <Input
            name='password'
            type='password'
            placeholder='Password'
            value={signInForm.password}
            onChange={(e) => {
              setSignInForm({ ...signInForm, password: e.target.value });
            }}
            required
            disabled={isPending}
          />
          <Button type='submit' size='lg' className='w-full'>
            Continue
          </Button>
        </form>
        <Separator className='my-5' />

        <p className='text-sm text-muted-foreground'>
          Don't have an account?{' '}
          <span className='hover:underline text-sky-600 cursor-pointer' onClick={() => navigate('/auth/signup')}>
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
