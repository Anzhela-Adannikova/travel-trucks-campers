import Link from "next/link";
import css from "./Header.module.css";
// import Catalog from "../Catalog/Catalog";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.headerLink}>
        <svg>
          <use href="/icons/logo.svg#icon-Logo" />
        </svg>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
