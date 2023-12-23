import { Outlet } from "react-router-dom";
import { Header } from "..";

export const DefaultLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
