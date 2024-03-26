import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
  
      <h1>User Profile</h1>
      <h1>user name here</h1>
      <Link href={"/pages/@user/replies"}>
        {" "}
        <h1>Replies</h1>{" "}
      </Link>
    </div>
  );
}

export default page;
