import Link from "next/link";

function page() {
  return (
    // <section className="w-full h-full flex flex-col   items-center ">
     <>
      <Link href={"/@user/replies"}>
        {" "}
        <h1>Replies</h1>{" "}
      </Link>
      </>
    // {/* </section> */}
  );
}

export default page;
