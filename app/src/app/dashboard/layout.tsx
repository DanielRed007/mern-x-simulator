"use client";

import { useEffect } from "react";
import Alert from "../components/shared/Alert";
import withAuth from "../components/auth/Authorized";
import { DashboardHeader } from "../components/shared/DashboardHeader";
import { Footer } from "../components/shared/Footer";
import Sidebar from "../components/Sidebar";
import useUserAuth from "../hooks/util/useUserAuth";
import useAlert from "../hooks/widgets/useAlert";

function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { logoutUser, userToken } = useUserAuth();
  const { showAlert, handleShowAlert, setShowAlert } = useAlert(5000);

  useEffect(() => {
    const token = userToken();
    if (token) {
      handleShowAlert();
    } else {
      logoutUser();
    }
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <DashboardHeader logoutUser={logoutUser} />
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-4'>
          {showAlert && (
            <Alert
              message='You Are Logged In'
              duration={3000}
              onClose={() => setShowAlert(false)}
            />
          )}
          <div className='desired-container'>
            <main>{children}</main>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default withAuth(DashboardLayout);
