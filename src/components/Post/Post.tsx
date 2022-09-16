import React from "react";
import style from "./post.module.scss";
import dots from "../../assets/dots.svg";
import { useStore } from "../../stores/RootStore";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { observer } from "mobx-react";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import { BsSave2, BsSave2Fill } from "react-icons/bs";
import Comment from "../Comment/Comment"
interface IProps {
  name: string;
  url: string;
  caption: string;
}

//https://picsum.photos/200/300?grayscale


const Post = ({ name, url, caption }: IProps) => {
  const { userStore } = useStore();
  return (
    <div className={style["postContent"]}>
      <div className={style["postHeader"]}>
        <div className={style["username"]}>
          <img
            className={style["image"]}
            src="https://picsum.photos/id/237/200/300"
          />
          <p>{name}</p>
        </div>
      </div>
      <div className={style["context"]}>
        <img src={url} />
      </div>
      <div className={style["postBottom"]}>
        <div className={style["icons"]}>
          <div>
            {userStore.like ? (
              <AiFillHeart
                style ={{color: "red"}}
                className={style["iconOfPost"]}
                onClick={userStore.handleLike}
              />
            ) : (
              <AiOutlineHeart
                onClick={userStore.handleLike}
                className={style["iconOfPost"]}
              />
            )}
            <FaRegComment className={style["iconOfPost"]} />
            <IoPaperPlane className={style["iconOfPost"]} />
          </div>
          <div>
            {userStore.saved ? (
              <BsSave2Fill
                className={style["iconOfPost"]}
                onClick={userStore.handleSave}
              />
            ) : (
              <BsSave2
                className={style["iconOfPost"]}
                onClick={userStore.handleSave}
              />
            )}
          </div>
        </div>
        <div className={style["likedBy"]}>
          <div className={style["avatar"]}>
            <img src="https://picsum.photos/id/237/200/300" />
          </div>
          <p>
            {" "}
            liked by <span>NipponBanzai</span> and <span>others</span>{" "}
          </p>
        </div>
        <div className={style["caption"]}>
          <p>
            <span>{name}</span>{caption}
          </p>
        </div>
        <div>
        {
        userStore.comments.map(comment => {
          return(
            <div className={style.commentStyle} >
              <span className ={style.commentOwner} >{comment.name}</span>
              <span>{comment.comment}</span>
            </div>
          )
        })
        }  
          </div>

        <div className={style["comments"]}>
          <Comment/>
        </div>
      </div>
    </div>
  );
};

export default observer(Post);
