import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import Stories from "react-insta-stories";
import "./_story.scss";

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
    setRunning(!running)
  };



  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1)
    }, 100)

    if(progress == 100){
      clearInterval(interval)
      setOpen(false);
      setProgress(0)
    }

    return () => clearInterval(interval)
  }, [progress])


  
  return (
    <>
      <div className={`story ${watched ? "" : "active"}`} onClick={isWatched}>
        <img src="https://picsum.photos/id/237/200/300" />
      </div>
      <Modal
        className="my-modal"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="story-context">
          <div className="outter">
            <div className="inner" style={{width: `${progress}%`}} ></div>
          </div>
          <div className="owner">
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
