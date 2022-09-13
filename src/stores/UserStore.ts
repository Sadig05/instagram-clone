import { makeAutoObservable } from "mobx";
import { IName, IUser } from "../models/Types";

class UserStore {
  user: IName = {
    username: "",
  };



  constructor(){
    makeAutoObservable(this);
  }

  getUser = (username: string) => {
    this.user = {username};
  }
}


export default UserStore;
