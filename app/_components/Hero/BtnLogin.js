import Link from "next/link";

export default function BtnLogin({ isLoggedIn, name, extraStyle }) {
  if (isLoggedIn) {
    return (
      <Link
        href="./dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    );
  }
}
