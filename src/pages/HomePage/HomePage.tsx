import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { userList, getUserList } from "../../app/userListSlice";
import UserListItem from "../../components/UserListItem";
import AddMoreButton from "../../components/AddMoreButton";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(userList);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUserList());
    }
  }, [dispatch, users]);

  return (
    <div>
      <h1 className={styles.title}>User List</h1>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id} className={styles.listItem}>
            <UserListItem user={user} />
          </li>
        ))}
      </ul>
      <AddMoreButton />
    </div>
  );
};

export default HomePage;
