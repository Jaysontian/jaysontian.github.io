import * as React from "react";
import { motion } from "framer-motion";

import layer1 from "./images/layer1.webp";
import layer2 from "./images/layer2.webp";
import layer3 from "./images/layer3.webp";
import layer4 from "./images/layer4.webp";
import layer5 from "./images/layer5.webp";

import "./galaxy.css";

const Galaxy = () => (
  <div className="galaxy-wrapper btm faded">
    <div className="galaxy-con">
      <div className="galaxy-frame">
        <motion.img initial={false} src={layer1} />
        <motion.img
          initial={false}
          src={layer2}
          data-speed="6"
          className="layer"
        />
        <motion.img
          initial={false}
          src={layer3}
          data-speed="-5"
          className="layer screen"
        />
        <motion.img
          initial={false}
          src={layer4}
          data-speed="12"
          className="layer"
        />
        <motion.img initial={false} src={layer5} className="lighten" />
      </div>
    </div>
  </div>
);

if (typeof document !== `undefined`) {
  document.addEventListener("mousemove", parallax);
  document.addEventListener("mouseleave", restore);
  function parallax(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
      var speed = layer.getAttribute("data-speed");
      var x = (window.innerWidth - e.pageX * speed) / 100;
      var y = (window.innerHeight - e.pageY * speed) / 100;
      //console.log(x, y)

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  function restore() {
    this.querySelectorAll(".layer").forEach((layer) => {
      layer.transition = "transform 0.6s ease-in-out";
      layer.style.transform = `translateX(0px) translateY(0px)`;
    });
  }
}

export default Galaxy;
