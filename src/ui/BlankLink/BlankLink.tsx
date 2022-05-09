import styles from "./BlankLink.module.scss";

type BlankLinkProps = {
  title: string;
  url: string;
};

const BlankLink = ({ title, url }: BlankLinkProps) => {
  return (
    <a className={styles.root} target="_blank" rel="noreferrer" href={url}>
      {title}
    </a>
  );
};

export default BlankLink;
