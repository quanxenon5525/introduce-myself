/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import useLocalStorage from "use-local-storage";
import { MockupLanguage, MockUpProjects, MockupTools } from "../data/data";
import { Introduction } from "./Introduction";
import { ListIntro, ListProject } from "./ListIntro";

export const Content = () => {
  const [mobileStored] = useLocalStorage("isMobile", false);

  return (
    <div className="max-w-full max-h-full">
      <Introduction />
      <div>
        <ListIntro title="Frameworks frontend">
          {MockupLanguage.map((value: any, index: number) => {
            return (
              <>
                {!mobileStored ? (
                  <div
                    key={index}
                    className="flex flex-col items-center w-32 text-center introduce rounded-lg p-2 space-y-3"
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
                    className="flex justify-center items-center w-16 h-16"
                  >
                    <Image
                      className="object-cover"
                      src={value.icon}
                      width={50}
                      height={50}
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
                {!mobileStored ? (
                  <div
                    key={index}
                    className="flex-1 introduce rounded-lg max-w-32 w-32 p-2 space-y-3 flex flex-col items-center"
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
                    className="flex justify-center items-center w-16 h-16"
                  >
                    <Image
                      className="object-cover"
                      src={value.icon}
                      width={50}
                      height={50}
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
                className="flex flex-col max-w-full w-full h-auto border border-2 border-gray-500 text-wrap rounded-lg hover:border-white hover:bg-[#ececec] hover:rounded-lg transition duration-500 ease-in-out shadow-lg shadow-purple-500/50"
              >
                <img
                  src={value.image}
                  className="object-cover w-full h-64 sm:h-72 rounded-t-lg"
                  alt={value.name}
                />
                <div className="p-2">
                  <h6>{value.name}</h6>
                  <div className="flex flex-row text-wrap text-center items-center">
                    <p>Tech used:</p>
                    {listIcon?.map((img: any, index: number) => (
                      <div className="flex flex-row" key={index}>
                        <img src={img.icon} className="m-1" />
                      </div>
                    ))}
                  </div>
                  <div className="text-wrap">
                    <p>{value.content}</p>
                  </div>
                  <div className="text-center mt-2 text-purple-600 hover:text-black">
                    <a href={value.link}>View more...</a>
                  </div>
                </div>
              </div>
            );
          })}
        </ListProject>
      </div>
    </div>
  );
};
