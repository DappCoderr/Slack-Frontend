import { useQuery } from '@tanstack/react-query';

import { getChannelByIdRequest } from '@/apis/channel';
import useAuth from '@/hooks/context/useAuth';

// prettier-ignore
export const useGetChannelById = (channelId) => {
  const { auth } = useAuth();
  const {isFetching, isError, error, data: channelDetails} = useQuery({
    queryFn: () => getChannelByIdRequest({ channelId, token: auth?.token }),
    queryKey: [`get-channel-${channelId}`]
  });

  return {
    isFetching,
    isError,
    error,
    channelDetails,
  };
};
