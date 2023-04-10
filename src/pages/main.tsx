import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Image from "next/image";
import demo from "../assets/falconBanner.png";
import CountDataItem from "../components/CountDataItem";
import Bio from "../components/Bio";
import GeneralInfo from "../components/GeneralInfo";

export default function Main() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const storedData = localStorage.getItem("user");
    // const userInfo = JSON.parse(storedData);
  }, []);

  return (
    <div className="m-4 ">
      <div className="d-flex align-items-center justify-content-between">
        <Link href={"/"}>
          <MdOutlineKeyboardBackspace className="arrow_back" />
        </Link>
        <button
          type="button"
          className="custom_button rounded-1 px-5 py-2">
          Hire me
        </button>
      </div>
      <div className="avatar_main_container">
        <div className="avatar_div">
          <Image
            src={demo}
            className="rounded-circle"
            height={120}
            width={120}
            alt="img"
          />
        </div>
        <div className="data_content_container">
          <h3>{user.name}</h3>
          <h5>{user.login}</h5>

          <div className="d-flex gap-5 mt-4">
            <CountDataItem
              title="Followers"
              count="20"
            />
            <CountDataItem
              title="Following"
              count="20.4k"
            />
            <CountDataItem
              title="Repositories"
              count="20"
            />
          </div>
        </div>

        <div className="row d-flex justify-content-between gap-4 p-5 ">
          <GeneralInfo />
          <Bio />
        </div>
      </div>
    </div>
  );
}
