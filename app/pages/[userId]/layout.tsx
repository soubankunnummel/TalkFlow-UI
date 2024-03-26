import React from "react";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
   
      <div>{children}</div>
    </div>
  );
}
