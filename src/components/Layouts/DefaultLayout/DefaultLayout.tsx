import { Outlet } from "react-router-dom";
import { Header } from "..";

export const DefaultLayout = () => {
  return (
    <div className="flex h-screen ml-[260px]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
