"use client";

import React from "react";
import Header from "./Header";
import FooterPage from "./Footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Homepage = (props: any) => {
  const { children } = props;

  return (
    <div className="layout">
      <div>
        <Header />
      </div>
      <div className="w-full h-full flex justify-center flex-1">{children}</div>
      <div className="footer">
        <FooterPage />
      </div>
    </div>
  );
};

export default Homepage;
