import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { AppContextProvider } from './context/AppContextProvider';
import AppRoutes from '@/Routes';
import Model from './components/organisms/Model/Model';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <Model />
      </AppContextProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
