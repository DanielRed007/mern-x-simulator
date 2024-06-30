"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  MouseEventHandler,
  FC,
} from "react";

const HomeContext = createContext<any | null>(null);

interface HomeContextProps {}

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [homeBannerProfiles, setProfiles] = useState([]);
  const [profilesLoading, setProfilesLoading] = useState(true);

  useEffect(() => {
    async function fetchProfiles() {
      const res = await fetch("/api/profiles");
      const data = await res.json();
      setProfiles(data);
      setProfilesLoading(false);
    }
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
