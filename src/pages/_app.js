import "../styles/global.scss";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 10,
      mirror:true, 
    });
  }, []);
  const [darkMode,setDarkMode] =useState(false);
  const newDarkMode = () => setDarkMode(!darkMode)
  return <Component {...pageProps} darkMode ={darkMode} newDarkMode={newDarkMode}/>;
}

export default CustomApp;
