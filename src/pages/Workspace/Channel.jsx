import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { useGetChannelById } from '@/hooks/apis/channel/useGetChannelById';

const Channel = () => {
  const { channelId } = useParams();
  const { channelDetails, isFetching, isError } = useGetChannelById(channelId);

  if (isFetching) {
    return (
      <div className='flex h-full items-center justify-center'>
        <Loader2Icon className='size-5 animate-spin text-muted-foreground' />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex h-full items-center justify-center'>
        <TriangleAlertIcon className='size-6 text-muted-foreground' />
        <span className='text-sm text-muted-foreground'>Channel not found</span>
      </div>
    );
  }

  return (
    <div>
      <h1>channel id: {channelDetails?._id}</h1>
      <p>channel Name: {channelDetails?.name}</p>
    </div>
  );
};

export default Channel;
