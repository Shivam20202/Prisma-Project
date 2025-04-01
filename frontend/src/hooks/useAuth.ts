import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { LoginFormData } from '../schemas/auth';
import { LoginResponse, ApiError } from '../types/user';

const API_URL = 'http://localhost:3000/api';

export const useAuth = () => {
  const login = useMutation<LoginResponse, ApiError, LoginFormData>({
    mutationFn: async (data) => {
      const response = await axios.post(`${API_URL}/auth/login`, data);
      return response.data;
    },
  });

  return { login };
};