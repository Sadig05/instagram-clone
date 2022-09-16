import { observer } from "mobx-react";
import React from "react";
import AddPost from "../../components/AddPost/AddPost";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Suggestion from "../../components/SideBar/Suggestion";
import Story from "../../components/Story/Story";
import { IPost } from "../../models/Types";
import { useStore } from "../../stores/RootStore";
import style from "./homePage.module.scss";

const HomePage = () => {
  const { userStore } = useStore();
  return (
      <React.Fragment>
        <AddPost/>
    <div className={style["mainContainer"]}>
      <div className={style["headerBorder"]}>
        <Header />
      </div>
      <div className={style["homeContainer"]}>
        <div className={style["rightSide"]}>
          <div className={style["storySection"]}>
            <Story />
            <Story />
            <Story />
          </div>
          <div className={style["posts"]}>
            <Post
              name="Sadig"
              url="https://picsum.photos/id/237/200/300"
              caption="  who cares..."
            />
            {userStore.posts.map((post: IPost) => {
              return (
                <>
               
                  <Post
                    name={post.name}
                    url={post.url}
                    caption={post.caption}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className={style["sideBar"]}>
          <h2>suggestion for you</h2>
          <Suggestion name="NipponBanzai" />
          <Suggestion name="cNap" />
          <Suggestion name="Eren" />
          <Suggestion name="Kaboom_" />
        </div>
      </div>
    </div>
      </React.Fragment>
  );
};

export default observer(HomePage);
