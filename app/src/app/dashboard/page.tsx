"use client";

import { Fragment, useEffect } from "react";
import withAuth from "../components/auth/Authorized";
import { DashboardHeader } from "../components/shared/DashboardHeader";
import useAlert from "../hooks/widgets/useAlert";
import Alert from "../components/shared/Alert";
import useUserAuth from "../hooks/util/useUserAuth";
import { Footer } from "../components/shared/Footer";
import Sidebar from "../components/Sidebar";

function Dashboard() {
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
            {/* Your main content goes here */}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default withAuth(Dashboard);
