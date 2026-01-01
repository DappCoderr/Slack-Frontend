import apis from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    const response = await apis.post(
      '/workspaces/',
      { name, description },
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
    console.log('Response in creating workspace request: ', response);
    return response?.data?.data;
  } catch (error) {
    console.log('Error in creating workspace request: ', error);
    throw error?.response?.data;
  }
};

export const fetchWorkspaceRequest = async ({ token }) => {
  try {
    const response = await apis.get('/workspaces/', {
      headers: {
        'x-access-token': token,
      },
    });
    console.log('Response in fetch workspace request: ', response);
    return response?.data?.data;
  } catch (error) {
    console.log('Error in fetching workspace request: ', error);
    throw error?.response?.data;
  }
};
