import Link from "next/link";
import AuthRequired from "./AuthRequired";

const Navbar = () => {
  return (
    <AuthRequired>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </AuthRequired>
  );
};

export default Navbar;
