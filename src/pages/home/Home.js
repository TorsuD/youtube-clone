import React, { useState } from "react";
import "./Home.css";
import { categories } from "../../data/categories";
import SideItem from "../../components/sidebar/SideItem";
import { GoHomeFill } from "react-icons/go";
import MinimizedItem from "../../components/sidebar/MinimizedItem";
import Header from "../../components/header/Header";
import { minimizedMenu } from "../../data/minimizedMenu";
import { subscriptions } from "../../data/subscriptions";
import { firstSection, secondSection } from "../../data/sidebar";

function Home() {
  // let yt indicate YOUTUBE
  // STATES
  const [hamburgerClick, setHamburgerClick] = useState(false);

  return (
    <div>
      <div className="yt-container">
        {/* HEADER */}
        <Header click={setHamburgerClick} />

        <div style={{ display: "flex", marginTop: "20px" }}>
          {/* BODY - SIDE BAR SECTION*/}
          {hamburgerClick ? (
            // MINIMISED MENU ITEMS
            <div>
              {minimizedMenu?.map((i) => {
                return <MinimizedItem title={i.title} icon={i.icon} />;
              })}
            </div>
          ) : (
            // MAXIMIZED MENU ITEMS

            <div style={{ flex: 0.15, marginRight: "50px" }}>
              <div style={{ backgroundColor: "#272727", borderRadius: "12px" }}>
                <SideItem
                  title={"Home"}
                  icon={<GoHomeFill color={"white"} size={20} />}
                />
              </div>

              {/* TOP LEVEL OF SIDE BAR CONTENT */}
              {firstSection?.map((i) => {
                return (
                  <SideItem
                    title={i.title}
                    icon={i.icon}
                    marginLeft={i.marginLeft}
                  />
                );
              })}

              <hr style={{ border: "0.2px solid #3f3f3f" }} />

              {/* MIDDLE LAYER OF SIDE BAR CONTENT */}
              {secondSection?.map((i) => {
                return <SideItem title={i.title} icon={i.icon} />;
              })}

              <hr
                style={{ border: "0.2px solid #3f3f3f", marginLeft: "-20px" }}
              />

              {/* SUBSCRIPTIONS */}
              <div
                style={{ color: "white", fontSize: "15px", padding: "10px" }}
              >
                Subscriptions
              </div>

              {subscriptions?.map((i) => {
                return (
                  <SideItem
                    title={i.title}
                    icon={i.icon}
                    live={i.live}
                    dot={i.dot}
                  />
                );
              })}
            </div>
          )}

          {/* BODY - CATEGORIES. i.e. ALL, MESSI ETC */}
          <div style={{ flex: 0.85, display: "flex" }}>
            {categories?.map((i) => {
              return (
                <div
                  className={`${
                    i?.title === "All" ? "yt-category-all" : "yt-category"
                  }`}
                >
                  {i?.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
