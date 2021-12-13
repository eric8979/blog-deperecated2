import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <h1>LOGO</h1>
      </Link>
      <nav>
        <Link href="/blog">blog</Link> <Link href="/about">about</Link>
      </nav>
      <ul>
        <li>
          <a href="">GitHub</a>
        </li>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>
          <a href="">twitter</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
