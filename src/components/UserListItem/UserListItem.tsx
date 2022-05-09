import { Link } from "react-router-dom";
import { User } from "../../api/userListAPI";
import BlankLink from "../../ui/BlankLink";

import styles from "./UserListItem.module.scss";

type UserListItemProps = {
  user: User;
};

const UserListItem = ({ user }: UserListItemProps) => {
  const { login, avatar_url, html_url } = user;
  return (
    <div className={styles.root}>
      <Link to={`/${login}`} className={styles.link}>
        <img alt={login} src={avatar_url} className={styles.avatar} />
        <p className={styles.login}>{login}</p>
      </Link>
      <BlankLink url={html_url} title={html_url} />
    </div>
  );
};

export default UserListItem;
