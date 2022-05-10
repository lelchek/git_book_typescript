import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  userInfo,
  getUserInfo,
  fetchStatus,
  clearData,
} from "../../app/userInfoSlice";
import { getFormatDate } from "../../helpers/formatDate";
import BlankLink from "../../ui/BlankLink";
import Paragraph from "../../ui/Paragraph";
import styles from "./UserPage.module.scss";

const UserPage = () => {
  const { userLogin } = useParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector(userInfo);
  const status = useAppSelector(fetchStatus);

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
          <Paragraph
            className={styles.paragraph}
            title="Followers"
            text={user.followers}
          />
          <Paragraph
            className={styles.paragraph}
            title="Following"
            text={user.following}
          />
          <Paragraph
            className={styles.paragraph}
            title="Created"
            text={getFormatDate(user.created_at)}
          />
          <Paragraph
            className={styles.paragraph}
            title="Company"
            text={user.company}
          />
          <Paragraph
            className={styles.paragraph}
            title="Email"
            text={user.email}
          />
          <Paragraph
            className={styles.paragraph}
            title="Location"
            text={user.location}
          />
          <p className={styles.paragraph}>
            Blog:{" "}
            <span>
              <BlankLink
                className={styles.link}
                title={user.blog}
                url={user.blog}
              />
            </span>
          </p>

          <Paragraph className={styles.paragraph} title="Bio" text={user.bio} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
