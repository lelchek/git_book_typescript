import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from "./PageLayout.module.scss";

const PageLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.root}>
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
