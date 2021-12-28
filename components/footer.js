import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.block}>© 2021, Eric Whale</div>
        <div className={styles.block}>
          <Link href="https://github.com/eric8979">GitHub</Link>
        </div>
        <div className={styles.block}>
          <Link href="https://www.linkedin.com/in/eric-whale-4853301ab/">
            LinkedIn
          </Link>
        </div>
        <div className={styles.block}>
          <Link href="https://twitter.com/ericthewhale">@ericthewhale</Link>
        </div>
        <div className={styles.block}>hsh048148@gmail.com</div>
        <div className={styles.lastblock}>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
          >
            <img
              alt="Creative Commons License"
              src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
            />
          </a>
          <br />
          {/* This work is licensed under a{" "} */}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
          >
            {/* Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 */}
            {/* International License */}
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
