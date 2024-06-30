import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

const JWT_SECRET = "the_secrets_that_you_keep_when_you_talking_in_your_sleep"; // Replace with your actual secret

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        jwt.verify(token, JWT_SECRET);
      } catch (error) {
        console.log({ error });
        router.push("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
