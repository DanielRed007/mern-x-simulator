import { useRouter } from "next/navigation";

interface UseAuthProps {
  logoutUser(): void;
  userAccessToken: string;
  userToken(): string;
}

const useUserAuth = () => {
  const router = useRouter();

  const userToken = () => {
    return localStorage.getItem("token");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return { logoutUser, userToken };
};

export default useUserAuth;
