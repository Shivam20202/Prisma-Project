import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginForm } from './components/LoginForm';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8">
          <h1 className="text-2xl font-bold text-center mb-8">Welcome back!</h1>
          <LoginForm />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;