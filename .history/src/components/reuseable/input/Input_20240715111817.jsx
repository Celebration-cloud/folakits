import { useCallback, useEffect, useState } from "react";
import styles from "./Input.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchItem } from "../../../store/actions/quoteActions";
function Input() {
  const [check, setCheck] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSearch(e) {
    setCheck(e.target.value);
  }
  console.log(check);
  useCallback(() => {
    function search(e) {
      e.preventDefault();
      navigate(`/${check}`);
      dispatch(searchItem(check));
      setCheck("");
    }
    window.addEventListener("", search);
    return () => {
      window.removeEventListener("", search);
    };
  }, [check, navigate, dispatch]);

  useEffect(() => {
    function search(e) {
      e.preventDefault();
      navigate(`/${check}`);
      dispatch(searchItem(check));
      setCheck("");
    }
    window.addEventListener("", search);
    return () => {
      window.removeEventListener("", search);
    };
  }, [check, navigate, dispatch]);

  return (
    <>
      <form className={styles["group"]}>
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles["icon"]}>
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          className={styles["input"]}
          type="search"
          value={check}
          onChange={handleSearch}
          placeholder="Search"
        />
        <button>Search</button>
      </form>
      <div className="flex items-center justify-center p-5">
        <div className="rounded-lg bg-gray-200 p-5">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="search"
              value={check}
              onChange={handleSearch}
              className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
              placeholder=""
              id=""
            />
            <input
              type="button"
              value="Search"
              className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
