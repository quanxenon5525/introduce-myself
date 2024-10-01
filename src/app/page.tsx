"use client";

import Homepage from "./components/Homepage";
import { Content } from "./components/Content";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

export default function Home() {
  const [mobileStored, setMobileStored] = useLocalStorage("isMobile", false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 1000;
      if (typeof window !== "undefined") {
        setMobileStored(isMobileDevice);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [setMobileStored]);

  return (
    <Homepage>
      <div className="flex flex-col items-center">
        <Content />
      </div>
    </Homepage>
  );
}
