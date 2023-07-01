import "./App.css";
import Galaxy from "./galaxy";
import Projects from "./Projects";

import { motion, useScroll, useSpring, useInView } from "framer-motion";

function App() {
  return (
    <div className="main">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="wrap-galaxy"
      >
        <Galaxy></Galaxy>
        <div className="galaxy-gradient"></div>
      </motion.div>
      <div className="body">
        <div className="wrap-head">
          <motion.div whileHover={{ scale: 1.2 }} className="button">
            J
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="description"
          >
            Hi! This is Jayson. I am a student, software & interface developer,
            artist, barista, and brain-science geek. Specifically, I'm exploring
            the intersection between software, interface design, and human
            behaviour. I was raised in Toronto, and I am now studying Cognitive
            Science at UCLA. Email / Linkedin
          </motion.h2>
        </div>
        <div className="wrap-projs">
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}

if (typeof document !== `undefined`) {
  window.addEventListener("load", () => {
    const el = document.querySelector(".wrap-galaxy");
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle("pinned", e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(el);
  });
}

export default App;
