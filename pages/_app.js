import React from "react";
import Footer from "../components/Footer";

import "../assets/fonts/GT Walsheim/stylesheet.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
