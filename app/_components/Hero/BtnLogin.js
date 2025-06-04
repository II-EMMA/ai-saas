import Link from "next/link";

export default function BtnLogin({ isLoggedIn, name }) {
  return (
    <Link href="./dashboard" className="btn btn-primary">
      Welcome back {name}
    </Link>
  );
}
