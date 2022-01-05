import React from "react";
import MainIcon from "../img/mainIcon.svg";
import Img2 from "../img/Frame.svg";
import Img3 from "../img/HamburgerBtn.svg";

export default function RandomBackground() {
  const backgrounds = [];
  let currentBackground;
  const settings = {};

  const background0 = (
    <img
      src={MainIcon}
      alt="random img"
      className="absolute"
      style={{ width: "60%", left: "20%", top: "10%" }}
    />
  );
  const background1 = (
    <img
      src={Img2}
      alt="random img"
      className="absolute"
      style={{ width: "60%", left: "20%", top: "10%" }}
    />
  );
  const background2 = (
    <img
      src={Img3}
      alt="random img"
      className="absolute"
      style={{ width: "60%", left: "20%", top: "20%", zIndex: -1 }}
    />
  );

  backgrounds.push(background0, background1, background2);
  currentBackground = backgrounds[2];
  return currentBackground;
}
