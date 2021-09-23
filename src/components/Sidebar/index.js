import { Component } from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";

import "./index.css";

const tabs = [
  { id: "DISCOVER", icon: <FaHeadphonesAlt />, name: "Discover" },
  { id: "SEARCH", icon: <BsSearch />, name: "Search" },
  { id: "FAVOURITES", icon: <AiFillHeart />, name: "Favourites" },
  { id: "PLAYLISTS", icon: <AiFillPlayCircle />, name: "Playlists" },
  { id: "CHARTS", icon: <RiBarChartHorizontalLine />, name: "Charts" },
];

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-component">
        <img
          className="profile-image"
          src="https://www.thepeakid.com/wp-content/uploads/2016/03/default-profile-picture.jpg"
          alt="profile"
        />
        <p className="profile-name">Bob Smith</p>
        <ul className="tabs-container">
          {tabs.map((tab) => (
            <li className="tab" key={tab.id}>
              {tab.icon}
              <p className="tab-name">{tab.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
