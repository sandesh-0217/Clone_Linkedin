import Sidebar from "../components/Sidebar"; // ✅ import
import Feed from "../components/Feed";
import SuggestionBox from "../components/SuggestionBox";
import Navbar from "../components/Navbar";

function Home() {
  
  return (
    
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#f3f2ef] min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Feed />
      </div>
      <div className="w-full md:w-1/4">
        <SuggestionBox />
      </div>
    </div>
  );
}

export default Home;