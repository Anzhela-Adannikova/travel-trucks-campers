import Link from "next/link";
import css from "./Header.module.css";
import Catalog from "../Catalog/Catalog";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.headerLink}>
        TravelTruck
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Catalog />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
