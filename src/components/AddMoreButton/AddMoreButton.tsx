import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { nextLinks, getMoreUserList } from "../../app/userListSlice";
import styles from "./AddMoreButton.module.scss";

const AddMoreButton = () => {
  const dispatch = useAppDispatch();
  const next = useAppSelector(nextLinks);

  const handleCLick = () => {
    if (next) {
      dispatch(getMoreUserList(next));
    }
  };

  return (
    <button className={styles.root} onClick={handleCLick} disabled={!next}>
      Add more...
    </button>
  );
};

export default AddMoreButton;
