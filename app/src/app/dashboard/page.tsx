"use client";

import { Fragment, useEffect, useState } from "react";
import withAuth from "../components/auth/Authorized";
import Alert from "../components/shared/Alert";

function Dashboard() {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      handleShowAlert();
    }
  }, []);

  return (
    <Fragment>
      <main className="">This is my dashboard</main>

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
