import React, { useEffect, useState } from "react";
import { MockUpContact } from "../data/data";

export const Introduction = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-full">
      <img
        src="/ava.jpg"
        alt="ava"
        className="rounded-full"
        width={100}
        height={100}
      />
      <h4 className="uppercase mt-3 mb-3 font-normal text-pretty text-center break-all">
        Hi, I'm Quan Nguyen
      </h4>
      <h5 className="uppercase text-gray-900 font-bold text-pretty text-center break-all">
        Junior Front-end Developer 👨‍💻
      </h5>
      <div className="flex flex-row mt-3 mb-1 xl:space-x-16 lg:space-x-14 md:space-x-8 sm:space-x-4 space-x-2">
        {MockUpContact.map((value: any, index: number) => {
          return (
            <a
              href={value?.link}
              target="_blank"
              key={index}
              className="rounded-lg flex flex-row space-x-3 p-2 border border-1 border-[#78716c] text-[#44403c] hover:bg-[#ececec]"
            >
              {!isMobile ? (
                <>
                  <p style={{ marginTop: "4px" }}>{value.img}</p>
                  <p className="font-normal text-black">{value.name}</p>
                </>
              ) : (
                <>
                  <p style={{ marginTop: "4px" }}>{value.img}</p>
                </>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};
