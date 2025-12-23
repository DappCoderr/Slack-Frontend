import apis from '@/config/axiosConfig';

export const signUpRequest = async ({ email, password, username }) => {
  try {
    console.log('signup Request is called....');
    const response = await apis.post('users/signup', {
      email,
      password,
      username,
    });
    console.log('signup Request response: ', response);
    return response.data;
  } catch (error) {
    console.log('signUpRequest error: ', error);
    throw error.response.data;
  }
};

export const signInRequest = async ({ email, password }) => {
  try {
    const response = await apis.post('users/signin', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log('signInRequest error: ', error);
    throw error.response.data;
  }
};
