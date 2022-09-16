import React from "react";
import home from "../../assets/home.svg";
import style from "./header.module.scss";
import { FaHome, FaInstagramSquare, FaFacebookMessenger } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useStore } from "../../stores/RootStore";
const Header = () => {
  const { userStore } = useStore();

  return (
    <section>
      <div className={style["headerContainer"]}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            className={style["igLogo"]}
          />
        </div>
        <div className={style["search"]}>
          <input type="text" placeholder="Search" />
          <AiOutlineSearch className={style["searchLogo"]} />
        </div>
        <div className={style["headerIcons"]}>
          <FaHome className={style["headerIcon"]} />
          <FaFacebookMessenger className={style["headerIcon"]} />
          <CgAdd
            onClick={userStore.openPostModal}
            className={style["headerIcon"]}
          />
          <MdOutlineExplore className={style["headerIcon"]} />
          <AiOutlineHeart className={style["headerIcon"]} />
          <BiUserCircle className={style["headerIcon"]} />
        </div>
      </div>
    </section>
  );
};

export default Header;
