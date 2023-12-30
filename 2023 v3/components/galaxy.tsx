'use client'

import '@/styles/galaxy.css'
import { useState, useEffect, useCallback} from 'react'

import layer1 from "@/assets/layer1.webp";
import layer2 from "/assets/layer2.webp";
import layer3 from "/assets/layer3.webp";
import layer4 from "/assets/layer4.webp";
import layer5 from "/assets/layer5.webp";

import { motion } from 'framer-motion'
import Image from 'next/Image'

export default function Galaxy() {
    const [blur, setBlur] = useState('');

    const onScroll = useCallback(event => {
        const { pageYOffset, scrollY } = window;
        console.log("yOffset", pageYOffset, "scrollY", scrollY);
        if (scrollY != 0){
            setBlur('blurred');
        }
        else {
            setBlur('');
        }

    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
        window.removeEventListener("scroll", onScroll, { passive: true });
        }
    }, []);

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

    return(
        <div className={`galaxy ${blur}`}>
            <div className="galaxy-con">
                <div className="galaxy-frame">
                    <motion.div initial={false} className="layer baselayer">
                        <Image src={layer1} alt="Layer 1 of Star Drawing"></Image>
                    </motion.div>
                    <motion.div initial={false} data-speed="6" className="layer">
                        <Image src={layer2} alt="Layer 2 of Star Drawing"></Image>
                    </motion.div>
                    <motion.div initial={false} data-speed="-15" className="layer">
                        <Image src={layer3} alt="Layer 2 of Star Drawing"></Image>
                    </motion.div>
                    <motion.div initial={false} data-speed="24" className="layer">
                        <Image src={layer4} alt="Layer 2 of Star Drawing"></Image>
                    </motion.div>
                    <motion.div initial={false} className="lighten layer">
                        <Image src={layer5} alt="Layer 2 of Star Drawing"></Image>
                    </motion.div>

                </div>
            </div>
        </div>
    )


}