import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Projects.css";

import matcha from "./assets/matcha.png";
import mapify from "./assets/mapify.png";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headingEntrance = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  return (
    <React.Fragment>
      <div className="projects-wrapper">
        <section ref={ref}>
          <motion.h2 style={headingEntrance}>Projects</motion.h2>
          <motion.div
            className="grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={list}
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="card card-project col-span-2 row-span-2"
            >
              <div className="icon-wrap">
                <img src="https://i.imgur.com/fGBkRLf.png"></img>
              </div>
              <div className="img-wrap">
                <img src={mapify}></img>
              </div>
              <div className="info-wrap">
                <h3>Mapify: Case Study</h3>
                <p>
                  Hybrid tracking and management of calendar events and todo
                  list via the Google Calendar and Google Tasks APIs.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="card card-project col-span-2 row-span-2"
            >
              <div className="icon-wrap">
                <img src="https://i.imgur.com/DtgLTAI.png"></img>
              </div>
              <div className="img-wrap">
                <img src={matcha}></img>
              </div>
              <div className="info-wrap">
                <h3>Matcha Productivity</h3>
                <p>
                  Hybrid tracking and management of calendar events and todo
                  list via the Google Calendar and Google Tasks APIs.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section ref={ref}>
          <motion.h2 style={headingEntrance}>Design & Art</motion.h2>
          <motion.div
            className="grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={list}
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="card card-exhibit row-span-2"
            >
              <img src="https://i.imgur.com/zOw8oTS.jpg"></img>
              <div className="info-wrap">
                <h2>Exchange Poster</h2>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="card  card-exhibit"
            >
              <img src="https://jaysontian.github.io/assets/art/Untitled_Artwork%206.jpg"></img>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="card  card-exhibit col-span-2"
            >
              <img src="https://jaysontian.github.io/assets/art/02.png"></img>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="card  card-exhibit col-span-2 row-span-2"
            >
              <img src="https://i.imgur.com/Abt6HDF.png"></img>
              <div className="info-wrap">
                <h2>Murakami</h2>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="card  card-exhibit "
            >
              <img src="https://i.imgur.com/PFHzNk0.jpg"></img>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="card  card-exhibit"
            >
              <img src="https://jaysontian.github.io/assets/art/Untitled_Artwork%2010.jpg"></img>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="card card-exhibit"
            >
              <img src="https://jaysontian.github.io/assets/art/Skyfall.jpg"></img>
              <div className="info-wrap">
                <h2>Skyfall</h2>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Projects;
