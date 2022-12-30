import { Outlet } from "react-router-dom";
import img from "../assets/images/bg-sidebar-mobile.svg";
const Layout = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="relative h-[20vh]">
          <div className="absolute right-[25%] top-[30%]">
            <div className="flex gap-3 w-full flex-1">
              <div className="border rounded-full py-2 px-4">1</div>
              <div className="border rounded-full py-2 px-4">2</div>
              <div className="border rounded-full py-2 px-4">3</div>
              <div className="border rounded-full py-2 px-4">4</div>
            </div>
          </div>
          <img src={img} alt="background" className="absolute -z-10" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
