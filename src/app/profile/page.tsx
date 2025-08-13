"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
  const router = useRouter();
  const handleClick = () => router.push("/");
  return (
    <div>
      <p>Profile</p>
      <button
        className="border border-blue-600 p-2 rounded hover:bg-blue-300 bg-blue-200 cursor-pointer"
        onClick={handleClick}
      >
        Home
      </button>
    </div>
  );
};

export default Profile;
