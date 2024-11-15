import { Flowbite } from "flowbite-react";
import { Content } from "./components/Content";
import Homepage from "./components/Homepage";
import { MobileProvider } from "./context/MobileViewContext";

export default function Home() {
  return (
    <Flowbite>
      <MobileProvider>
        <Homepage>
          <Content />
        </Homepage>
      </MobileProvider>
    </Flowbite>
  );
}
