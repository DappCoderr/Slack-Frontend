import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { signInRequest } from '@/apis/auth';
import useAuth from '@/hooks/context/useAuth';

export const useSignin = () => {
  const { setAuth } = useAuth();

  // prettier-ignore
  const { isPending, isSuccess, error, mutateAsync: signinMutation} = useMutation({
    mutationFn: signInRequest,
    onSuccess: (response) => {
      console.log('Signin completed successfully:', response);

      const userObj = JSON.stringify(response);
      const token = response.data.token;
      localStorage.setItem('user', userObj);
      localStorage.setItem('token', token);

      setAuth({
        user: userObj,
        token: token,
        isLoading: false,
      });

      toast.success('Signed in successfully', {
        description: 'Redirecting to your dashboard...',
      });
    },
    onError: (error) => {
      console.log('Failed to sign in:', error);
      toast.error('Sign in failed', {
        description: error?.message || 'Please check your credentials and try again.',
      });
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
