import apis from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({ name, description = 'This is dummy default description for the workspace, you can update/change this anytime.', token }) => {
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
    console.log('Response in creating workspace request: ', response?.data?.data);
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
    return response?.data?.data;
  } catch (error) {
    console.log('Error in deleting workspace: ', error);
    throw error?.response?.data;
  }
};

export const updateWorkspaceRequest = async ({ workspaceId, name, token }) => {
  try {
    const response = await apis.put(
      `/workspaces/${workspaceId}`,
      { name },
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
    return response?.data?.data;
  } catch (error) {
    console.log('Error in updating workspace request', error);
    throw error.response.data;
  }
};

export const addChannelToWorkspace = async ({ workspaceId, channelName, token }) => {
  try {
    const response = await apis.post(
      `/workspaces/${workspaceId}/channels`,
      { channelName },
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
    return response?.data?.data;
  } catch (error) {
    console.log('Error in adding channel to workspace', error);
    throw error.response.data;
  }
};

export const addMemberToWorkspace = async ({ workspaceId, memberId, role, token }) => {
  try {
    const response = await apis.post(
      `/workspaces/${workspaceId}/members`,
      { memberId, role },
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
    return response?.data?.data;
  } catch (error) {
    console.log('Error in adding member to workspace request', error);
    throw error.response.data;
  }
};
