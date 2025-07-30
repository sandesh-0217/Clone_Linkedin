import React, { useState } from "react";
import EditModal from "../components/EditModal";
import Navbar from "../components/Navbar";

// Initial Profile Data
const profileData = {
  name: "Profile 1",
  title: "Frontend Developer",
  location: "Kathmandu, Nepal",
  avatar: "https://i.pravatar.cc/150?img=12",
  about:
    "Passionate frontend developer with a love for creating responsive, user-friendly interfaces using React and Tailwind CSS.",
  experience: [
    {
      role: "Frontend Developer",
      company: "TechCraft Pvt. Ltd.",
      duration: "2023 - Present",
    },
    {
      role: "Web Intern",
      company: "Code Studio Nepal",
      duration: "2022 - 2023",
    },
  ],
  education: [
    {
      degree: "BSc in Computer Science",
      school: "Texas College of Management & IT",
      year: "2020 - 2024",
    },
  ],
  skills: ["React", "Tailwind CSS", "JavaScript", "Git", "C", "Figma"],
};

// Sample posts (you can replace with actual post filtering logic)
const allPosts = [
  {
    id: 1,
    author: "Profile 1",
    content: "Excited to be working on a new React project! 🚀",
  },
  {
    id: 2,
    author: "Profile 1",
    content: "Exploring TailwindCSS — loving the utility-first workflow!",
  },
  {
    id: 3,
    author: "Another User",
    content: "This should not show on Profile 1's profile.",
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [profile, setProfile] = useState(profileData);

  const handleSave = (updated) => {
    setProfile(updated);
    setIsEditOpen(false);
  };

  const profilePosts = allPosts.filter((post) => post.author === profile.name);

  return (
    
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded shadow p-6 flex items-center gap-4">
        <img
          src={profile.avatar}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h1 className="text-xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.title}</p>
          <p className="text-sm text-gray-500">{profile.location}</p>
        </div>
        <button
          className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          onClick={() => setIsEditOpen(true)}
        >
          Edit Profile
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b">
        {["About", "Skills", "Posts"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 text-sm ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === "About" && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">{profile.about}</p>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Experience</h3>
            {profile.experience.map((exp, i) => (
              <div key={i} className="mb-2">
                <p className="font-medium">{exp.role}</p>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-xs text-gray-500">{exp.duration}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Education</h3>
            {profile.education.map((edu, i) => (
              <div key={i} className="mb-2">
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.school}</p>
                <p className="text-xs text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Skills" && (
        <div className="bg-white p-6 rounded shadow flex flex-wrap gap-2">
          {profile.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {activeTab === "Posts" && (
        <div className="bg-white p-6 rounded shadow space-y-4">
          {profilePosts.length === 0 ? (
            <p className="text-gray-500 text-sm">No posts by this user.</p>
          ) : (
            profilePosts.map((post) => (
              <div
                key={post.id}
                className="border p-4 rounded shadow-sm bg-gray-50"
              >
                <p className="font-semibold mb-1">{post.author}</p>
                <p className="text-gray-700 text-sm">{post.content}</p>
              </div>
            ))
          )}
        </div>
      )}

      {/* Edit Modal */}
      {isEditOpen && (
        <EditModal
          profile={profile}
          onClose={() => setIsEditOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Profile;