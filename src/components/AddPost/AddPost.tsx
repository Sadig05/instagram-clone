import React from "react";
import style from "./addPost.module.scss"
import { Modal } from "@mui/material";
import { useState } from "react";
import { useStore } from "../../stores/RootStore";
import UserStore from "../../stores/UserStore";
import { IoContrastOutline } from "react-icons/io5";
import { observer } from "mobx-react";
import Button from '@mui/material/Button';

const AddPost = () => {
  const { userStore } = useStore();

  const [data, setData] = useState({ name: "", url: "", caption: "" });

  const handleClick = () => {
    console.log(data);
    
    userStore.sharePost(data)

    userStore.closePostModal();
  }

  return (
    <div>
      <Modal className ={style["myModal"]}
        open={userStore.modalIsOpen}
        onClose={userStore.closePostModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={style.newPost} >
        <p>Share new post</p>
          <div className={style.labelInput} >      
            <label>name: </label>
            <input onChange={(e) =>  setData( (prev) => ({...prev, [e.target.name]: e.target.value} ))} name= "name" type="text" />
          </div>
          <div className={style.labelInput}>
            <label>content(url): </label>
            <input  placeholder="https:// " onChange={(e) =>  setData( (prev) => ({...prev, [e.target.name]: e.target.value} ))} name = "url" type="text" />
          </div>
          <div className={style.labelInput}>
            <label>captio: </label>
            <input onChange={(e) =>  setData( (prev) => ({...prev, [e.target.name]: e.target.value} ))} name = "caption" type="text" />
          </div>
          <Button onClick={handleClick} variant="contained">Post</Button>
        </div>
      </Modal>
    </div>
  );
};

export default observer(AddPost); 
