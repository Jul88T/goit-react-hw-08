import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../redux/filters/slice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="search">
        Find contacts by name:
      </label>
      <input
        className={styles.input}
        id="search"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Name"
      />
    </div>
  );
};

export default SearchBox;
