import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import SuggestionBox from "../components/SuggestionBox";

function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#f3f2ef] min-h-screen">
      {/* Left Sidebar */}
      <div className="w-full md:w-[250px]">
        <Sidebar />
      </div>

      {/* Feed */}
      <div className="flex-1">
        <Feed />
      </div>

      {/* Right Sidebar */}
      <div className="hidden md:block w-[280px]">
        <SuggestionBox />
      </div>
    </div>
  );
}

export default Home;