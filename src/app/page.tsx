import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Github from "../lib/components/Github";

export default function Home() {

  return (
    <main className="">
      <div className="">
        <div className="float-end p-2 bg-body-secondary">
            <UserButton afterSignOutUrl="/"/>
        </div>
        <Github />
      </div>
    </main>
  );
}
