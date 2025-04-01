import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '../schemas/auth';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useAuth } from '../hooks/useAuth';

export const LoginForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const onSubmit = (data: LoginFormData) => {
    login.mutate(data, {
      onSuccess: (response) => {
        setSuccessMessage('Login successful');
        setTimeout(() => {
          console.log('Login Successful:', response);
          setSuccessMessage('');
          
        }, 2000);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          type="email"
          placeholder="UID"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
          error={errors.password?.message}
        />
      </div>
      <Button type="submit" isLoading={login.isPending}>
        Login
      </Button>
      {successMessage && (
        <p className="text-sm text-green-500">{successMessage}</p>
      )}
      {login.isError && (
        <p className="text-sm text-red-500">{login.error.message}</p>
      )}
    </form>
  );
};
