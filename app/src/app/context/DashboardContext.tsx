"use client";

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

const DashboardContext = createContext<any | null>(null);

interface DashboardContextProps {}

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardTweetsData, setDashboardTweetsData] = useState<Tweet[]>([]);
  const [dashboardLoading, setDashboardLoading] = useState<boolean>(true);

  const fetchDashboardTweetsData = useCallback(async () => {
    const response = await apiHandler({
      endpoint: "/api/tweet",
      method: "GET",
      headers: { "Content-Type": "application/json" },
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
    fetchDashboardTweetsData();
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
