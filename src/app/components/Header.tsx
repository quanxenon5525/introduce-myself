import { useState } from "react";
import useLocalStorage from "use-local-storage";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileStored] = useLocalStorage("isMobile", false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!mobileStored ? (
        <div className="flex flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-52 m-8">
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
            className="transition duration-0 hover:duration-150 ease-in-out"
          >
            <img
              src="/logo.png"
              className="object-cover"
              width={80}
              height={80}
            />
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
      ) : (
        <>
          <div className="flex">
            <div
              className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out w-64`}
            >
              <button
                onClick={toggleNavbar}
                className="text-white p-4 focus:outline-none"
              >
                {isOpen ? "Close" : "Open"}
              </button>
              <nav className="mt-8">
                <a
                  href="#"
                  className="block px-4 py-2 text-lg hover:bg-gray-700"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-lg hover:bg-gray-700"
                >
                  About me
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-lg hover:bg-gray-700"
                >
                  Project
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-lg hover:bg-gray-700"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            {!isOpen ? (
              <button onClick={toggleNavbar}>
                <img
                  src="/logo.png"
                  className="object-cover"
                  width={80}
                  height={80}
                />
              </button>
            ) : (
              <button>
                <img
                  src="/logo.png"
                  className="object-cover"
                  width={80}
                  height={80}
                />
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
