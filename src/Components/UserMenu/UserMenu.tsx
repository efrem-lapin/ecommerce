import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";

import { Link } from "react-router-dom";

import styles from "./UserMenu.module.scss";

const UserMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <Link className={styles.link} to="/user">
          <UserIcon className={styles.icon} />
          <span className={styles.text}>Пользователь</span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to="/messages">
          <MessageIcon className={styles.icon} />
          <span className={styles.text}>Сообщения</span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to="/favorites">
          <HeartIcon className={styles.icon} />
          <span className={styles.text}>Избранное</span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to="/cart">
          <CartIcon className={styles.icon} />
          <span className={styles.text}>Корзина</span>
        </Link>
      </li>
    </ul>
  );
};

export default UserMenu;
