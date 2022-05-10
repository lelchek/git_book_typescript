import styles from "./Paragraph.module.scss";

type ParagraphProps = {
  title: string;
  text: string | number | null;
};

const Paragraph = ({ title, text }: ParagraphProps) => {
  if (!text) {
    return null;
  }

  return (
    <p className={styles.root}>
      {title}: <span className={styles.span}>{text}</span>
    </p>
  );
};

export default Paragraph;
