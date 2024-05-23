"use client";
import { RooteState } from "@/lib/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from 'next/navigation';

function Page() {
  const path = usePathname();
  const user = useSelector((state: RooteState) => state.status.isLogdin);

  return (
    <>
      <h1>user post </h1>
    </>
  );
}

export default Page;
