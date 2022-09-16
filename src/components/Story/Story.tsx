import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import Stories from "react-insta-stories";
import style from "./story.module.scss";
 
const Story = () => {
  const [watched, setWatched] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  // const handleClose = () => setOpen(false);
  console.log("aaaaaaaaaaaaaaaaaaa");

  const isWatched = () => {
    setWatched((prev) => (prev ? prev : !prev));
    setOpen(true);
    setRunning(!running);
  };

  let interval: number = 0;

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 100);
     } else{
      clearInterval(interval)
     }
  }, [running]);

  useEffect(() => {
    if(progress == 100){
      setRunning(false);
      setOpen(false)
      clearInterval(interval)
      setProgress(0)
    }
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className={style["storyOwner"]}>
      <div className={`${style["story"]} ${watched ? "" : `${style["active"]}`}`} onClick={isWatched}>
        <img src="https://picsum.photos/id/237/200/300" />
        {/* <div className={style.imgHolder} ></div> */}
   
      </div>
      <p>Cnap</p>
      </div>
      <Modal
        className={style["myModal"]}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={style["storyContext"]}>
          <div className={style["outter"]}>
            <div className={style["inner"]} style={{ width: `${progress}%` }}></div>
          </div>
          <div className={style["owner"]}>
            <img src="https://picsum.photos/id/237/200/300" />
            <span>cNap</span>
          </div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
      </Modal>
    </>
  );
};

export default Story;
