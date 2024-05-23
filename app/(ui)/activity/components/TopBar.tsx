import Link from "next/link";
import React from "react";
import Button from "./ButtonAll";
import ButtonAll from "./ButtonAll";
import FollowsBtn from "../follows/FollowsBtn";
import RepliesBtn from "../replies/RepliesBtn";
import MentionBtn from "../mentions/MentionBtn";
import QuotesBtn from "../quotes/QuotesBtn";
import RepostsBtn from "../reposts/RepostsBtn";
import VerifiedBtn from "../verified/VerifiedBtn";

export default function TopBar() {
  return (
    <div className="flex justify-center items-center md:w-full overflow-x-auto ">
      <ul className="w-[768px]  h-[42px] gap-x-[6px] flex justify-between items-center md:w-full md:p-2 p-2 px-[16px]">
        <Link href={"/activity"}>
          <li>
            <ButtonAll value={"All "} />
          </li>
        </Link>
        <Link href={"/activity/follows"}>
          <li>
            <FollowsBtn value={"Follows"} />
          </li>
        </Link>
        <Link href={"/activity/replies"}>
          <li>
            <RepliesBtn value={"Replies"} />
          </li>
        </Link>
        <Link href={"/activity/mentions"}>
          <li>
            <MentionBtn value={"Mentions"} />
          </li>
        </Link>
        <Link href={"/activity/quotes"}>
          <li>
            <QuotesBtn value={"Quotes"} />
          </li>
        </Link>
        <Link href={"/activity/reposts"}>
          <li>
            <RepostsBtn value={"Reposts"} />
          </li>
        </Link>
        <Link href={"/activity/verified"}>
          <li>
            <VerifiedBtn value={"Verified"} />
          </li>
        </Link>
      </ul>

      {/* <h1>All activitys</h1>
      <ul className="flex justify-evenly">
        <Link href={"/pages/activity/followers"}>
          <li>Followers</li>
        </Link>
        <li>Replies</li>
        <li>Mentions</li>
        <li>Followers</li>
      </ul> */}
    </div>
  );
}
