import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-screen bg-slate-200 font-sans ">
      <Header />
      <main className="mx-auto  bg-slate-200">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
