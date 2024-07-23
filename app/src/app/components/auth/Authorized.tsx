import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import { getJwtSecret } from "@/lib/auth";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const secret = getJwtSecret();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        jwt.verify(token, secret);
      } catch (error) {
        console.log({ error });
        router.push("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
