"use client";

import withAuth from "../components/auth/Authorized";

function Page() {
  return <main className="">This is my dashboard</main>;
}

export default withAuth(Page);
