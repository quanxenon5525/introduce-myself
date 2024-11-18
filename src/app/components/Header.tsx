import React, { useEffect, useState } from "react";
import { useMobile } from "../context/MobileViewContext";
import { Button, DarkThemeToggle, Drawer, Sidebar } from "flowbite-react";
import Link from "next/link";

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
    <div>
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
          <Link href="#">
            <img
              src="/logo.png"
              className="object-cover mt-0"
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
          <div className="flex justify-center space-x-4 w-full items-center">
            <Link
              href="#"
              className="text-base header-text transition duration-0 hover:duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-base header-text duration-0 hover:duration-150 ease-in-out"
            >
              About me
            </Link>
            <Link
              href="#"
              className="text-basel header-text duration-0 hover:duration-150 ease-in-out"
            >
              Project
            </Link>
            <Link
              href="#"
              className="text-base header-text duration-0 hover:duration-150 ease-in-out"
            >
              Contact
            </Link>
          </div>
          <div>
            <DarkThemeToggle />
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
            <div className="flex flex-col items-center space-x-4 space-y-4 w-full">
              <span></span>
              <Link
                href="#"
                className="text-base header-text transition duration-0 hover:duration-150 ease-in-out"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-base header-text transition duration-0 hover:duration-150 ease-in-out"
              >
                About me
              </Link>
              <Link
                href="#"
                className="text-basel header-text transition duration-0 hover:duration-150 ease-in-out"
              >
                Project
              </Link>
              <Link
                href="#"
                className="text-base header-text transition duration-0 hover:duration-150 ease-in-out"
              >
                Contact
              </Link>
              <div className="flex items-center">
                <DarkThemeToggle />
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

export default Header;
