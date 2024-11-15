"use client";
import Image from "next/image";
import { useMobile } from "../context/MobileViewContext";
import {
  MockUpExperiences,
  MockupLanguage,
  MockUpProjects,
  MockupTools,
} from "../data/data";
import { Introduction } from "./Introduction";
import { ListExperience, ListIntro, ListProject } from "./ListView";

export const Content = () => {
  const { isMobile } = useMobile();

  return (
    <div className="max-w-full max-h-full">
      <Introduction />
      <div>
        <ListIntro title="Frameworks frontend">
          {MockupLanguage.map((value: any, index: number) => {
            return (
              <>
                {!isMobile ? (
                  <div
                    key={index}
                    className="flex flex-col items-center w-32 text-center introduce rounded-lg p-2 space-y-3 transition duration-300 ease-in-out"
                  >
                    <Image
                      className="object-cover"
                      src={value.icon}
                      width={50}
                      height={100}
                      alt="logo"
                    />
                    <span>{value.name}</span>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex justify-center items-center w-14 h-14"
                  >
                    <Image
                      className="object-cover"
                      src={value.icon}
                      width={35}
                      height={35}
                      alt="logo"
                    />
                  </div>
                )}
              </>
            );
          })}
        </ListIntro>

        <ListIntro title="Tools">
          {MockupTools.map((value: any, index: number) => {
            return (
              <>
                {!isMobile ? (
                  <div
                    key={index}
                    className="flex flex-col items-center w-32 text-center introduce rounded-lg p-2 space-y-3 transition duration-300 ease-in-out"
                  >
                    <Image
                      className="object-cover"
                      src={value.icon}
                      width={50}
                      height={100}
                      alt="logo"
                    />
                    <span>{value.name}</span>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex justify-center items-center w-14 h-14"
                  >
                    <Image
                      className="object-cover"
                      src={value.icon}
                      width={35}
                      height={35}
                      alt="logo"
                    />
                  </div>
                )}
              </>
            );
          })}
        </ListIntro>

        <ListProject title="Projects">
          {MockUpProjects.map((value: any, index: number) => {
            const listIcon = value.techs;
            return (
              <div
                key={index}
                className="flex flex-col max-w-full w-full h-auto border border-2 border-gray-500 text-wrap rounded-lg hover:border-white hover:rounded-lg transition duration-300 ease-in-out shadow-lg shadow-black-500/50"
              >
                <img
                  src={value.image}
                  className="object-cover w-full h-64 sm:h-72 rounded-t-lg"
                  alt={value.name}
                />
                <div className="p-2 space-y-2">
                  <p className="text-lg font-bold">{value.name}</p>
                  <div className="text-wrap">
                    <p>{value.content}</p>
                  </div>
                  <div className="flex flex-row text-wrap text-center items-center">
                    <p>Tech used:</p>
                    {listIcon?.map((img: any, index: number) => (
                      <div className="flex flex-row" key={index}>
                        <img
                          alt="icon"
                          src={img.icon}
                          className="mx-1"
                          width="24"
                          height="24"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-2 text-black hover:text-neutral-700">
                    <a href="#">View more...</a>
                  </div>
                </div>
              </div>
            );
          })}
        </ListProject>

        <ListExperience title="Experiences">
          {MockUpExperiences.map((value: any, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-row max-w-full w-[86%] md:w-full sm:w-full h-auto space-x-5 items-center border border-2 px-3 border-gray-500 text-wrap rounded-lg hover:border-[#ececec] hover:bg-[#ececec] hover:rounded-lg transition duration-300 ease-in-out"
              >
                <img
                  src={value.icon}
                  className="object-cover w-28 h-28"
                  alt={value.name}
                />
                <div className="px-2 py-2 flex flex-col flex-wrap space-y-1">
                  <div className="flex flex-row items-center space-x-2">
                    <p className="font-bold">{value.name}</p>
                    <p className="text-xs font-normal">({value.year})</p>
                  </div>
                  <p className="text-sm font-semibold">{value.role}</p>

                  <p className="text-sm font-normal break-all">
                    {value.information}
                  </p>
                </div>
              </div>
            );
          })}
        </ListExperience>
      </div>
    </div>
  );
};
