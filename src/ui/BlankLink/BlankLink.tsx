import cn from "classnames";
import styles from "./BlankLink.module.scss";

type BlankLinkProps = {
  title: string;
  url: string;
  className?: string;
};

const BlankLink = ({ title, url, className }: BlankLinkProps) => {
  return (
    <a
      className={cn(styles.root, className)}
      target="_blank"
      rel="noreferrer"
      href={url}
    >
      {title}
    </a>
  );
};

export default BlankLink;
