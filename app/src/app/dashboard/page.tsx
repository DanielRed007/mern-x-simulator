"use client";

import { Fragment, useEffect } from "react";
import withAuth from "../components/auth/Authorized";
import { DashboardHeader } from "../components/shared/DashboardHeader";
import useAlert from "../hooks/widgets/useAlert";
import Alert from "../components/shared/Alert";
import useUserAuth from "../hooks/util/useUserAuth";

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
    <Fragment>
      <DashboardHeader logoutUser={logoutUser} />

      {showAlert && (
        <Alert
          message="You Are Logged In"
          duration={3000}
          onClose={() => setShowAlert(false)}
        />
      )}
    </Fragment>
  );
}

export default withAuth(Dashboard);
