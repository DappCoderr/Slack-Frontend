import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const UserDetailsSkeleton = () => {
  return (
    <div className='h-full bg-gradient-to-br from-slate-50 to-slate-100 p-6 overflow-auto'>
      <div className='max-w-2xl mx-auto'>
        <div className='mb-6'>
          <Skeleton className='h-10 w-24' />
        </div>

        <Card className='shadow-lg border-0'>
          <CardHeader className='bg-gradient-to-r from-slack-Default to-slack-Medium rounded-t-xl'>
            <Skeleton className='h-8 w-48 bg-slate-400' />
          </CardHeader>

          <CardContent className='pt-8'>
            <div className='flex flex-col items-center mb-8'>
              <Skeleton className='w-24 h-24 rounded-full mb-4' />
              <Skeleton className='h-8 w-48 mb-4' />
              <Skeleton className='h-4 w-32' />
            </div>

            <Separator className='my-6' />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Skeleton className='h-4 w-16' />
                <Skeleton className='h-6 w-40' />
              </div>
              <div className='space-y-2'>
                <Skeleton className='h-4 w-12' />
                <Skeleton className='h-6 w-32' />
              </div>
              <div className='space-y-2 md:col-span-2'>
                <Skeleton className='h-4 w-20' />
                <Skeleton className='h-12 w-full rounded-md' />
              </div>
            </div>

            <Separator className='my-8' />

            <div className='flex gap-3 justify-end'>
              <Skeleton className='h-10 w-20' />
              <Skeleton className='h-10 w-32' />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDetailsSkeleton;
