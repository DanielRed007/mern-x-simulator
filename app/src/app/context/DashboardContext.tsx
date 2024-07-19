"use client";

import { apiHandler } from "@/lib/api/api-handler";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

const DashboardContext = createContext<any | null>(null);

interface DashboardContextProps {}

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardTweetsData, setDashboardTweetsData] = useState([]);
  const [dashboardLoading, setDashboardLoading] = useState(true);

  async function fetchDashboardTweetsData() {
    const response = await apiHandler({
      endpoint: "/api/tweet",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    setDashboardTweetsData(data);
    setDashboardLoading(false);
  }

  useEffect(() => {
    fetchDashboardTweetsData();
  }, []);

  const dashboardValues = { dashboardTweetsData, dashboardLoading };

  return (
    <DashboardContext.Provider value={dashboardValues}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  return useContext(DashboardContext);
};
