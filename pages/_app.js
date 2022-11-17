import React from "react";
import Footer from "../components/Footer";

import "../assets/fonts/GT Walsheim/stylesheet.css";
import "../styles/globals.css";
import gsap from "gsap";

function MyApp({ Component, pageProps }) {
  // Code for cursor animation
  // https://codepen.io/GreenSock/pen/WNNNBpo
  if (typeof window !== "undefined") {
    // Client-side-only code
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }

  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Footer />
      {/* Custom Cursor */}
      <div class='ball hidden lg:block'></div>
    </React.Fragment>
  );
}

export default MyApp;
