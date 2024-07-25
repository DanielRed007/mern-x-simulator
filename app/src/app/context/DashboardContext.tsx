"use client";

import { useRouter } from "next/navigation";
import { apiHandler } from "@/lib/api/api-handler";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { Tweet } from "../types/tweet";
import jwt from "jsonwebtoken";
import { getJwtSecret } from "@/lib/auth";

const DashboardContext = createContext<any | null>(null);

interface DashboardContextProps {}

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const secret = getJwtSecret();
  const [dashboardTweetsData, setDashboardTweetsData] = useState<Tweet[]>([]);
  const [dashboardLoading, setDashboardLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<string | null>("");

  const getUserId = () => {
    const user = localStorage.getItem("userId");
    setUserId(user);
  };

  const fetchDashboardTweetsData = useCallback(async () => {
    const token = localStorage.getItem("token");

    const response = await apiHandler({
      endpoint: "/api/tweet",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    try {
      if (response.ok) {
        const data = await response.json();

        setDashboardTweetsData(data);
        setDashboardLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const token: any = localStorage.getItem("token");

    try {
      jwt.verify(token, secret);
    } catch (error) {
      console.log({ error });
      router.push("/login");
    }

    fetchDashboardTweetsData();
    getUserId();
  }, []);

  const dashboardValues = {
    dashboardTweetsData,
    dashboardLoading,
    fetchDashboardTweetsData,
  };

  return (
    <DashboardContext.Provider value={dashboardValues}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  return useContext(DashboardContext);
};
