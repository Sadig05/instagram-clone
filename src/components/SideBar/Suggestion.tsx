import React, { useState } from "react";
import style from "./suggestion.module.scss";

interface IProp {
  name: string;
}

const Suggestion = ({ name }: IProp) => {
  const [follow, setFollow] = useState(false);
  return (
    <>
      <div>
        <div className={style["suggestionBlock"]}>
          <div className={style["profileSuggest"]}>
            <img src="https://picsum.photos/id/237/200/300" />
            <p>{name}</p>
          </div>
          <p
            className={follow ? `${style["follow"]}` : `${style["following"]}`}
            onClick={() => setFollow(!follow)}
          >
            {follow ? <p>follow</p> : <p>following</p>}
          </p>
        </div>
      </div>
    </>
  );
};

export default Suggestion;
