import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logoImage} alt="logo" src="logo.png" />
      </Link>
      <p className={styles.title}>GitHub</p>
    </header>
  );
};

export default Header;
