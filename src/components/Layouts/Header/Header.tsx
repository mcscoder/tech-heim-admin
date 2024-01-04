import { LogoIcon } from "@/constants";
import { Navigation } from "./components";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 bottom-0 w-[260px] flex flex-col gap-12 px-6 py-8 ">
      <div className="flex justify-center">
        <LogoIcon />
      </div>
      <Navigation />
    </header>
  );
};
