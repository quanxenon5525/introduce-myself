"use client";
import React from "react";
import { useMobile } from "../context/MobileViewContext";

type ListIntroProps = {
  children: React.ReactNode;
  title: string;
};
export const ListIntro = ({ children, title }: ListIntroProps) => {
  const { isMobile } = useMobile();

  return (
    <div className="flex flex-col items-center mt-5">
      <h5 className="uppercase text-gray-900 font-bold text-pretty text-center break-all">
        {title}
      </h5>
      <div className="mt-3">
        <div
          className={
            !isMobile
              ? `flex flex-row flex-wrap justify-center items-center gap-4 px-4`
              : `flex flex-wrap justify-center items-center space-x-2 space-y-1`
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const ListProject = ({ children, title }: ListIntroProps) => {
  const { isMobile } = useMobile();

  return (
    <div className="flex flex-col items-center mt-5">
      <h5 className="uppercase text-gray-900 font-bold text-pretty text-center break-all">
        {title}
      </h5>
      <div className="mt-3">
        <div
          className={
            !isMobile
              ? "grid grid-cols-2 grid-rows-1 justify-items-center gap-14 px-4"
              : "grid grid-cols-1 justify-items-center gap-4 px-8"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const ListExperience = ({ children, title }: ListIntroProps) => {
  const { isMobile } = useMobile();

  return (
    <div className="flex flex-col items-center mt-5">
      <h5 className="uppercase text-gray-900 font-bold text-pretty text-center break-all">
        {title}
      </h5>
      <div className="mt-3">
        <div
          className={
            !isMobile
              ? "grid grid-rows-1 justify-items-center gap-4 px-4"
              : "grid grid-cols-1 justify-items-center gap-4 px-8"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};
