import apis from '@/config/axiosConfig';

export const getChannelByIdRequest = async ({ channelId, token }) => {
  try {
    const response = await apis.get(`/channels/${channelId}`, {
      headers: {
        'x-access-token': token,
      },
    });
    return response?.data?.data;
  } catch (error) {
    console.log('Error in fetching channel request: ', error);
    throw error?.response?.data;
  }
};
