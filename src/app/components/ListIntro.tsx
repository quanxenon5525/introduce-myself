import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

type ListIntroProps = {
  children: React.ReactNode;
  title: string;
};
export const ListIntro = ({ children, title }: ListIntroProps) => {
  const [mobileStored, setMobileStored] = useLocalStorage("isMobile", false);

  return (
    <div className="flex flex-col items-center mt-5">
      <h5 className="uppercase text-gray-900 font-bold text-pretty text-center break-all">
        {title}
      </h5>
      <div className="mt-3">
        <div
          className={
            !mobileStored
              ? `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`
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
  const [mobileStored, setMobileStored] = useLocalStorage("isMobile", false);

  return (
    <div className="flex flex-col items-center mt-5">
      <h5 className="uppercase text-gray-900 font-bold text-pretty text-center break-all">
        {title}
      </h5>
      <div className="mt-3">
        <div
          className={
            !mobileStored
              ? "grid grid-cols-2 grid-rows-1 justify-items-center gap-12"
              : "grid grid-cols-1 justify-items-center gap-12"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};
