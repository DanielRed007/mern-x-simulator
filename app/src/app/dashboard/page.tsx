"use client";

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import withAuth from "../components/auth/Authorized";
import Alert from "../components/shared/Alert";
import { DashboardHeader } from "../components/shared/DashboardHeader";

const JWT_SECRET = "the_secrets_that_you_keep_when_you_talking_in_your_sleep";

function Dashboard() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const expired = jwt.verify(token, JWT_SECRET);
      handleShowAlert();
    } else {
      localStorage.removeItem("token");
      router.push("/login");
    }
  }, []);

  return (
    <Fragment>
      <DashboardHeader />

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
