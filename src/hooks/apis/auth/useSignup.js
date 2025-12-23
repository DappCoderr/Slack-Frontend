import { signUpRequest } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log('Signup completed successfully:', data);
      toast.success('Account created successfully', {
        description: 'Redirecting to the sign-in page...',
      });
    },
    onError: (error) => {
      console.log('Failed to sign up:', error);
      toast.error('Sign up failed', {
        description:
          error?.message || 'Something went wrong. Please try again.',
      });
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signupMutation,
  };
};
