import { observer } from "mobx-react";
import React, { useState } from "react";
import { useStore } from "../../stores/RootStore";
import style from "./comment.module.scss";

const Comment = () => {
  const [value, setValue] = useState("");
  const { userStore } = useStore();

  console.log(userStore.comments);

  const handleClick = () => {

    userStore.postComment({
      name: "ali",
      comment: value
    });

  };


  function search(event:any) {
    if(event.key === 'Enter') {
        setValue(event.value);        
    }
}

  return (
    <div className={style.comment}>
      <div className={style["inputComment"]}>
        <textarea placeholder="Add a comment..." onChange={(e) => setValue(e.target.value)} 
          onKeyDown = {search}
        ></textarea>
      </div>
      <p onClick={handleClick}>Post</p>
    </div>
  );
};

export default observer(Comment);
