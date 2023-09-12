import React, { useState, useRef } from "react";
import "./Header.css";
import { FiMenu, FiSearch } from "react-icons/fi";
import { PiMicrophoneFill } from "react-icons/pi";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import ytLogo from "../../assets/images/youtube-logo.png";
import profile from "../../assets/images/profile.png";
import SearchResults from "../../components/header/SearchResults";

function Header({ click }) {
  // let yt stand for YouTube
  // CONSTANTS
  const [focused, setFocused] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);
  const [searchToolTip, setSearchToolTip] = useState(false);
  const [createToolTip, setCreateToolTip] = useState(false);
  const [notification, setNotification] = useState(false);
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  //REF
  const inputRef = useRef(null);

  //FUNCTIONS
  const handleFocus = () => {
    inputRef.current.focus();
    setFocused(true);
  };

  // CONSTANTS
  const toggleMenu = () => setHamburgerClick(!hamburgerClick);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="yt-menu"
            onClick={() => {
              toggleMenu();
              click(!hamburgerClick);
            }}
          >
            <FiMenu color="white" size={20} />
          </div>

          {/* YOUTUBE LOGO */}
          <div>
            <img
              src={ytLogo}
              alt="Youtube logo"
              className="yt-logo"
              style={{ outline: "none" }}
            />
          </div>
        </div>

        {/* SEARCH SECTION*/}
        <div style={{ display: "flex" }}>
          <div
            className="yt-search"
            onClick={handleFocus}
            onBlur={() => setFocused(false)}
          >
            {focused && (
              <FiSearch
                color="#aeaeae"
                size={18}
                style={{ marginRight: "9px", marginLeft: "10px" }}
              />
            )}

            {/* INPUT FIELD */}
            <input
              placeholder="Search"
              className="input-input"
              onFocus={() => {
                setFocused(true);
                setShowSearchResults(true);
              }}
              onBlur={() => {
                setFocused(false);
                setShowSearchResults(false);
              }}
              ref={inputRef}
              style={{ paddingLeft: "10px" }}
            />

            {/* RESULTS COMING FROM CLICKING SEARCH BAR */}
            {showSearchResults && (
              <div style={{ position: "absolute", top: "60px" }}>
                <SearchResults />
              </div>
            )}
          </div>
          <div
            className="yt-search-icon"
            onMouseOver={() => setSearchToolTip(true)}
            onMouseLeave={() => setSearchToolTip(false)}
            style={{ position: "relative" }}
          >
            <FiSearch color="white" size={20} />

            {searchToolTip && (
              <div
                className="yt-tooltip"
                style={{ position: "absolute", top: "59px" }}
              >
                Search
              </div>
            )}
          </div>

          {/* SEARCH WITH SOUND - MICROPHONE */}
          <div
            className="yt-microphone"
            style={{ position: "relative", cursor: "pointer" }}
            onMouseOver={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
          >
            <PiMicrophoneFill color={"white"} size={22} />
            {showToolTip && (
              <div
                className="yt-tooltip"
                style={{ position: "absolute", top: "59px" }}
              >
                Search with your voice
              </div>
            )}
          </div>
        </div>

        {/* NOTIFICATIONS- BELL */}
        <div className="yt-notification">
          <div
            className="yt-vid"
            onMouseOver={() => setCreateToolTip(true)}
            onMouseLeave={() => setCreateToolTip(false)}
            style={{ position: "relative" }}
          >
            <RiVideoAddLine color="white" size={20} />

            {createToolTip && (
              <div
                className="yt-tooltip"
                style={{ position: "absolute", top: "59px" }}
              >
                Create
              </div>
            )}
          </div>

          {/* NUMBER OF MESSAGES */}
          <div
            className="yt-bell"
            onMouseOver={() => setNotification(true)}
            onMouseLeave={() => setNotification(false)}
          >
            <FaRegBell color="white" size={20} className="yt-bell-icon" />
            <div className="yt-number">7</div>

            {notification && (
              <div
                className="yt-tooltip"
                style={{ position: "absolute", top: "70px" }}
              >
                Notifications
              </div>
            )}
          </div>

          {/* YOUTUBER USER */}
          <div className="yt-profile">
            <img src={profile} alt="Profile" className="yt-profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
