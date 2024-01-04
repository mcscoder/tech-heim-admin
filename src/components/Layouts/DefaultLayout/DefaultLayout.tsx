import { Outlet } from "react-router-dom";
import { Header } from "..";

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen ml-[260px] bg-Gray-Normal">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
