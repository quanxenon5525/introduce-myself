"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Navbar rounded style={{ backgroundColor: "#292524 !important" }}>
      <Navbar.Brand href="/">
        <Image
          src="/logo.png"
          alt="Signature Penguin"
          width={100}
          height={100}
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">
          Mr. Penguin
        </span>
      </Navbar.Brand>
      <motion.div
        className="px-5 py-3 border-2"
        initial={{
          borderImageSource: "linear-gradient(90deg, #00ff99, #ff0066)",
        }}
        animate={{
          borderImageSource: [
            "linear-gradient(90deg, #00ff99, #ff0066)",
            "linear-gradient(180deg, #00ff99, #ff0066)",
            "linear-gradient(270deg, #00ff99, #ff0066)",
            "linear-gradient(360deg, #00ff99, #ff0066)",
          ],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ borderImageSlice: 5 }}
      >
        <Navbar.Collapse>
          <Navbar.Link
            href="#"
            active
            className="text-xl text-primary md:bg-transparent md:text-[#e5e5e5] md:p-0"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="text-xl text-primary rounded md:hover:bg-transparent md:hover:text-[#e5e5e5] md:p-0"
          >
            About me
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="text-xl text-primary rounded md:hover:bg-transparent md:hover:text-[#e5e5e5] md:p-0"
          >
            Career
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="text-xl text-primary rounded md:hover:bg-transparent md:hover:text-[#e5e5e5] md:p-0"
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </motion.div>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User information" img="/ava.jpg" rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default Header;
