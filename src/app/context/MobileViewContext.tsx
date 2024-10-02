"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const MobileContext = createContext({ isMobile: false, setIsMobile: () => {} });

export const MobileProvider = ({ children }: { children: React.ReactNode }) => {
  // const [isMobile, setIsMobile] = useLocalStorage("isMobile", false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // if (typeof window != undefined) {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const isMobileView = currentWidth <= 768;
      setIsMobile(isMobileView);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // }
  }, [setIsMobile]);

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => useContext(MobileContext);
