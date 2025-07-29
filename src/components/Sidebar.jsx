// File: /src/components/Sidebar.jsx
import React from "react";

function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-full md:w-[280px] bg-[#f3f2ef] space-y-3 text-sm">
      {/* Top Card */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="h-14 bg-gray-300 w-full" />
        <div className="flex flex-col items-center p-3 -mt-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Default profile"
            className="w-14 h-14 rounded-full border-2 border-white"
          />
          <h2 className="mt-2 text-base font-semibold text-center">{user?.name}</h2>
          <p className="text-xs text-gray-600 text-center">{user?.role || "Holder at nothing"}</p>
          <p className="text-xs text-gray-500 text-center">Kathmandu, Bāgmatī</p>
          <div className="text-xs text-gray-700 mt-1">
            <img
              src="https://img.icons8.com/ios-filled/18/company.png"
              alt="Company"
              className="inline-block mr-1"
            />
            nothing
          </div>
        </div>
      </div>

      {/* Connections */}
      <div className="bg-white rounded-lg p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Connections</p>
            <p className="text-xs font-medium text-blue-700">Grow your network</p>
          </div>
          <img
            src="https://img.icons8.com/ios-filled/20/add-user-group-man-man.png"
            alt="icon"
            className="w-4 h-4"
          />
        </div>
      </div>

      {/* Premium */}
      <div className="bg-white rounded-lg p-3 shadow-sm hover:bg-gray-100 cursor-pointer">
        <p className="text-xs text-gray-500 mb-1">Access exclusive tools & insights</p>
        <p className="text-xs text-orange-700 font-semibold">💼 Try Premium for $0</p>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white rounded-lg p-3 shadow-sm space-y-2 text-xs">
        <div className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
          <img src="https://img.icons8.com/ios-filled/20/bookmark-ribbon.png" className="w-4 h-4" />
          <span>Saved items</span>
        </div>
        <div className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
          <img src="https://img.icons8.com/ios-filled/20/groups.png" className="w-4 h-4" />
          <span>Groups</span>
        </div>
        <div className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
          <img src="https://img.icons8.com/ios-filled/20/news.png" className="w-4 h-4" />
          <span>Newsletters</span>
        </div>
        <div className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
          <img src="https://img.icons8.com/ios-filled/20/event-accepted-tentatively.png" className="w-4 h-4" />
          <span>Events</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;