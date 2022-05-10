import cn from "classnames";
import styles from "./Paragraph.module.scss";

type ParagraphProps = {
  title: string;
  text: string | number | null;
  className?: string;
};

const Paragraph = ({ title, text, className }: ParagraphProps) => {
  if (!text) {
    return null;
  }

  return (
    <p className={cn(styles.root, className)}>
      {title}: <span className={styles.span}>{text}</span>
    </p>
  );
};

export default Paragraph;
