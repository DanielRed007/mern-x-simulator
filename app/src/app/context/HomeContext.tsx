"use client";

import { apiHandler } from "@/lib/api/api-handler";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

const HomeContext = createContext<any | null>(null);

interface HomeContextProps {}

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [homeBannerProfiles, setProfiles] = useState([]);
  const [profilesLoading, setProfilesLoading] = useState(true);

  async function fetchProfiles() {
    const response = await apiHandler({
      endpoint: "/api/profiles",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    setProfiles(data);
    setProfilesLoading(false);
  }

  useEffect(() => {
    fetchProfiles();
  }, []);

  const homeValues = { homeBannerProfiles, profilesLoading };

  return (
    <HomeContext.Provider value={homeValues}>{children}</HomeContext.Provider>
  );
};

export const useHome = () => {
  return useContext(HomeContext);
};
