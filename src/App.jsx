import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoutes from '@/Routes';
import { Toaster } from '@/components/ui/sonner';

import Model from './components/organisms/Model/Model';
import { TooltipProvider } from './components/ui/tooltip';
import { AppContextProvider } from './context/AppContextProvider';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContextProvider>
          <AppRoutes />
          <Model />
        </AppContextProvider>
      </TooltipProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
