import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen items-center justify-center bg-background px-4'>
      <Card className='max-w-md w-full text-center'>
        <CardHeader>
          <CardTitle className='text-5xl font-bold'>404</CardTitle>
        </CardHeader>

        <CardContent className='space-y-4'>
          <p className='text-muted-foreground'>Oops! The page you are looking for doesn’t exist.</p>

          <Button onClick={() => navigate(-1)} className='w-full'>
            Go Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
