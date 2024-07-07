"use client";
import { RooteState } from "@/lib/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from 'next/navigation';
import Posts from "./post/[postId]/page";

function Page() {
  const path = usePathname();
  const user = useSelector((state: RooteState) => state.status.isLogdin);

  return (
    <>
    {/* <<<-- FEED POSTS ->>> */}
     <Posts/>
    </>
  );
}

export default Page;
