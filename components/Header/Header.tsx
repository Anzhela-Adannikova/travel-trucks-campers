import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.headerLink}>
        <svg width="136" height="16">
          <use href="/icons/logo.svg#icon-Logo" />
        </svg>
      </Link>
      <nav className={css.headerNav}>
        <ul>
          <li>
            <Link href="/" className={css.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/catalog" className={css.link}>
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
