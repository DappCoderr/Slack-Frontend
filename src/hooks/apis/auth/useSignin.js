import { signInRequest } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSignin = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (data) => {
      console.log('Signin completed successfully:', data);
      toast.success('Signed in successfully', {
        description: 'Redirecting to your dashboard...',
      });
    },
    onError: (error) => {
      console.log('Failed to sign in:', error);
      toast.error('Sign in failed', {
        description:
          error?.message || 'Please check your credentials and try again.',
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
