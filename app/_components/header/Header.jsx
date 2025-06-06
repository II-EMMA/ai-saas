import Link from "next/link";
import BtnLogin from "../Hero/BtnLogin";

export default function Header() {
  return (
    <header className="bg-base-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-8 py-2">
        <div className="font-bold">CodeFastSaaS</div>
        <div className="space-x-4 max-md:hidden">
          <Link href="#pricing" className="link link-hover">
            Pricing
          </Link>
          <Link href="#FAQ" className="link link-hover">
            FQA
          </Link>
        </div>
        <div className="">
          <BtnLogin isLoggedIn={true} name="EMMA" />
        </div>
      </div>
    </header>
  );
}
