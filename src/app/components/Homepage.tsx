"use client";
import React from "react";
import FooterPage from "./Footer";
import Header from "./Header";

type HomePageProps = {
  children: React.ReactNode;
};
const Homepage = ({ children }: HomePageProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full h-full flex-1">{children}</div>
      <FooterPage />
    </div>
  );
};

export default Homepage;
