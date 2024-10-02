import { Content } from "./components/Content";
import { MobileProvider } from "./context/MobileViewContext";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <MobileProvider>
      <Homepage>
        <div className="flex flex-col items-center">
          <Content />
        </div>
      </Homepage>
    </MobileProvider>
  );
}
