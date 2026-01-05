import apis from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({
  name,
  description = 'This is dummy default description for the workspace, you can update/change this anytime.',
  token,
}) => {
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
    console.log(
      'Response in creating workspace request: ',
      response?.data?.data
    );
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
    return response?.data?.data;
  } catch (error) {
    console.log('Error in fetching workspace request: ', error);
    throw error?.response?.data;
  }
};

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
  try {
    const response = await apis.get(`/workspaces/${workspaceId}`, {
      headers: {
        'x-access-token': token,
      },
    });
    return response?.data?.data;
  } catch (error) {
    console.log('Error in fetching workspace details request: ', error);
    throw error?.response?.data;
  }
};

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
  try {
    const response = await apis.delete(`/workspaces/${workspaceId}`, {
      headers: {
        'x-access-token': token,
      },
    });
    return response;
  } catch (error) {
    console.log('Error in deleting workspace: ', error);
    throw error?.response?.data;
  }
};
