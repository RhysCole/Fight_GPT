import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "@/api/authService";
import { loginSuccess, setLoginLoading, setLoginFailed } from "@/contexts/slices/userSlice"; 
import { type UserProfile } from "@/models/types";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginUser, 
    onMutate: () => {
      dispatch(setLoginLoading());
    },
    onSuccess: (data) => {
      console.log("Login data:", data);
      const userProfile: UserProfile = {
          id: data.id,
          firstname:data.firstname,  
          lastname: data.lastname,
          email: data.email,
          balance: data.balance,
          role: data.role,
      };
      dispatch(loginSuccess(userProfile));
      console.log("login success");
      navigate("/");
    },
    onError: (error) => {
      console.error("Login error:", error);
      dispatch(setLoginFailed());
      console.log("login failed");
    },
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onMutate: () => {
      dispatch(setLoginLoading());
    },
    onSuccess: (data: UserProfile) => {
      dispatch(loginSuccess(data));
      console.log("registration success");
    },
    onError: (error) => {
      console.error("Registration error:", error);
      dispatch(setLoginFailed());
      console.log("registration failed");
    },
  });

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    isLoading: loginMutation.isPending || registerMutation.isPending,
    isError: loginMutation.isError || registerMutation.isError,
  };
};
