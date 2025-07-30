// /src/components/ProfileSummaryCard.jsx
import React from "react";

function ProfileSummaryCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow p-4 text-center">
      <div className="bg-gray-200 h-16 mb-10 relative">
        <img
          src="https://i.pinimg.com/564x/c7/bb/b6/c7bbb68b7a4ae96fe61c2145cfa82e5d.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <img
          src="https://i.pinimg.com/564x/09/10/37/09103760cb51d96b118b8476cfbf2928.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 -bottom-8"
        />
      </div>
      <div className="mt-10">
        <h2 className="font-semibold">{user?.name}</h2>
        <p className="text-sm text-gray-600">{user?.role || "Holder at nothing"}</p>
        <p className="text-xs text-gray-500">Kathmandu, Bāgmatī</p>
        <div className="mt-2 text-left text-sm font-semibold text-gray-700">
          <span className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/fluency/24/000000/company.png"
              alt="Company"
              className="w-4 h-4"
            />
            nothing
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileSummaryCard;