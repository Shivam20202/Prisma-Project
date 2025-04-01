export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    email: string;
  };
}

export interface ApiError {
  message: string;
  status: number;
}