import "../styles/global.scss";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      mirror:true, 
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
