import { useEffect, useState } from "react";
import { useMobile } from "../context/MobileViewContext";
import { Button, DarkThemeToggle, Drawer, Sidebar } from "flowbite-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMobile();
  const [showMobileView, setShowMobileView] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setShowMobileView(isMobile);
  }, [isMobile]);

  return (
    <>
      {showMobileView ? (
        <>
          <div className="flex justify-between items-center">
            <div>
              <Button onClick={() => setIsOpen(true)} className="bg-white">
                <img src="/logo/menu.svg" alt="menu" width={24} height={24} />
              </Button>
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
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header
          className="flex justify-center"
          title=""
          titleIcon={() => (
            <a href="#">
              <img
                src="/logo.png"
                className="object-cover mt-0"
                alt="logo"
                width={80}
                height={80}
              />
            </a>
          )}
        />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex flex-col justify-center space-x-4 w-full items-center">
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
              <div className="flex items-center">
                <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">
                  <DarkThemeToggle />
                </button>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Header;
