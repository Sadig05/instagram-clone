import { makeAutoObservable, observable } from "mobx";
import { IComment, IName, IPost, IUser } from "../models/Types";

class UserStore {
  user: IName = {
    username: "",
  };

  like: boolean = false;
  saved: boolean = false;
  modalIsOpen: boolean = false;

  posts: IPost[] = [];
  post: IPost = { name: "", url: "", caption: "" };

  comments: IComment[] = [];
  comment: IComment = { name: "", comment: "" };

  constructor() {
    makeAutoObservable(this);
  }

  getUser = (username: string) => {
    this.user = { username };
  };

  handleLike = () => {
    this.like = !this.like;
    return this.like;
  };

  handleSave = () => {
    this.saved = !this.saved;
  };

  openPostModal = () => {
    this.modalIsOpen = true;
  };

  closePostModal = () => {
    this.modalIsOpen = false;
  };

  postComment = (comment: IComment) => {
    console.log("my data", comment);
    this.comments = [...this.comments, comment];
  };

  sharePost = (post: IPost) => {
    this.posts = [...this.posts, post];
  };
}

export default UserStore;
