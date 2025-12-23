import { signInRequest } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';

export const useSignin = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (data) => {
      console.log('Signin is successfully completed: ', data);
    },
    onError: (error) => {
      console.log('Failed to signin: ', error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
