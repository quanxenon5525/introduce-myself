import { useEffect, useState } from "react";
import { useMobile } from "../context/MobileViewContext";
import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMobile();
  const [showMobileView, setShowMobileView] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setShowMobileView(isMobile);
  }, [isMobile]);

  return (
    <>
      {showMobileView ? (
        <>
          <div className="flex justify-between items-center mb-5 px-3">
            <div>
              <img src="/logo/menu.svg" alt="menu" width={24} height={24} />
            </div>
            <a href="#">
              <img
                src="/logo.png"
                className="object-cover mt-0"
                alt="logo"
                width={80}
                height={80}
              />
            </a>
            <div>
              <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">
                <DarkThemeToggle />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-flow-col justify-items-center items-center max-w-full p-3 dark:bg-red-500">
          <a href="#">
            <img
              src="/logo.png"
              className="object-cover mt-0"
              alt="logo"
              width={80}
              height={80}
            />
          </a>
          <div className="flex justify-center space-x-4 w-full items-center">
            <a
              href="#"
              className="text-base header-text transition duration-0 hover:duration-150 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base header-text duration-0 hover:duration-150 ease-in-out"
            >
              About me
            </a>
            <a
              href="#"
              className="text-basel header-text duration-0 hover:duration-150 ease-in-out"
            >
              Project
            </a>
            <a
              href="#"
              className="text-base header-text duration-0 hover:duration-150 ease-in-out"
            >
              Contact
            </a>
          </div>
          <div>
            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <DarkThemeToggle />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
