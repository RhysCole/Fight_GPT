import { type UserProfile } from "@/models/types";
interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const API_BASE_URL = "http://127.0.0.1:8000";

export const loginUser = async (credentials: LoginCredentials): Promise<UserProfile> => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Login failed");
  }
  
  return response.json(); 
};

export const registerUser = async (data: RegisterData): Promise<UserProfile> => {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
    }

    return response.json();
};
