import Dashboard from "@/components/dashboard/Dashboard";
import Sidebar from "@/components/Sidebar";
import SidebarRight from "@/components/SidebarRight";

const HomePage: React.FC = () => {

  return (
    <div className='bg-[#f8fbff] h-full min-h-fit flex'>
      <Sidebar />
      <div className="px-5 pb-5 w-full lg:w-4/6 h-fit min-h-screen">
        <Dashboard />
      </div>
      <SidebarRight />
    </div>
  );
};

export default HomePage;
