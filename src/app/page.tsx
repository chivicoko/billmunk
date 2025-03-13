import Dashboard from "@/components/dashboard/Dashboard";
import Sidebar from "@/components/Sidebar";
import SidebarRight from "@/components/SidebarRight";

const HomePage: React.FC = () => {

  return (
    <div className='bg-[#f8fbff] h-full min-h-screen flex'>
      <Sidebar />
      <div className="px-5 pb-5 w-full lg:w-4/6 h-full min-h-fit col-span-2 border-x border-customGray ">
        <Dashboard />
      </div>
      <SidebarRight />
    </div>
  );
};

export default HomePage;
