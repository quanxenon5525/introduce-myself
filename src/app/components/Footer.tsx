import { Footer } from "flowbite-react";
import React from "react";

const FooterPage = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="w-full h-auto p-5 text-center">
      <Footer.Copyright
        href="#"
        by="Quan Nguyen. All Rights Reserved"
        year={currentYear}
        className="flex justify-center"
      />
    </div>
  );
};

export default FooterPage;
