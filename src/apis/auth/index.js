import axios from '@/config/axiosConfig';

export const signUpRequest = async ({ email, password, name }) => {
  try {
    const response = await axios.post('users/signup', {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error) {
    console.log('signUpRequest error: ', error);
    throw error.response.data;
  }
};

export const signInRequest = async ({ email, password }) => {
  try {
    const response = await axios.post('users/signin', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log('signInRequest error: ', error);
    throw error.response.data;
  }
};
