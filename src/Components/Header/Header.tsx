import Logo from "../Logo/Logo";
import UserMenu from "../UserMenu/UserMenu";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Logo />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
