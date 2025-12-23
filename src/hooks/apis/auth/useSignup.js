import { signUpRequest } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';

export const useSignup = () => {
  console.log('useSignup is called......');
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log('Signup is successfully completed: ', data);
    },
    onError: (error) => {
      console.log('Failed to signup: ', error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signupMutation,
  };
};
