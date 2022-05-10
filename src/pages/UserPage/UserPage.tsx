import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  userInfo,
  getUserInfo,
  fetchStatus,
  clearData,
} from "../../app/userInfoSlice";
import BlankLink from "../../ui/BlankLink";
import Paragraph from "../../ui/Paragraph";

import styles from "./UserPage.module.scss";

const UserPage = () => {
  const { userLogin } = useParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector(userInfo);
  const status = useAppSelector(fetchStatus);

  console.log("status :>> ", status);

  useEffect(() => {
    if (userLogin) {
      dispatch(getUserInfo(userLogin));
    }
    return () => {
      dispatch(clearData());
    };
  }, [userLogin, dispatch]);

  if (status === "failed") {
    return <p>User not found</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      {user.name && <h1 className={styles.title}>{user.name}</h1>}
      <div className={styles.wrapper}>
        <img className={styles.image} alt={user.login} src={user.avatar_url} />
        <div className={styles.contentWrapper}>
          <Paragraph title="Followers" text={user.followers} />
          <Paragraph title="Following" text={user.following} />
          <Paragraph title="Created" text={user.created_at} />
          <Paragraph title="Company" text={user.company} />
          <Paragraph title="Email" text={user.email} />
          <Paragraph title="Location" text={user.location} />
          <p className={styles.paragraph}>
            Blog:{" "}
            <span>
              <BlankLink title={user.blog} url={user.blog} />
            </span>
          </p>

          <Paragraph title="Bio" text={user.bio} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
