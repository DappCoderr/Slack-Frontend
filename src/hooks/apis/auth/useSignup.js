import { signUpRequest } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutate: singupMutation,
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
    singupMutation,
  };
};
