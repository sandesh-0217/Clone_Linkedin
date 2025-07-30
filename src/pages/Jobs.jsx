import React, { useState } from "react";
import JobCard from "../components/JobCard";
import ApplyModal from "../components/ApplyModal.jsx";
import Navbar from "../components/Navbar";

const jobCategories = [
  "All", "Frontend", "Backend", "Full Stack", "AI/ML", "DevOps", "UI/UX", "Mobile", "Data Science", "Marketing", "Internship"
];

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechHive",
    location: "Remote",
    salary: "$70k–$90k",
    type: "Full-time",
    category: "Frontend",
    logo: "https://logo.clearbit.com/github.com",
    description: "Build responsive UIs using React and Tailwind.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CloudNest",
    location: "San Francisco, CA",
    salary: "$90k–$110k",
    type: "Full-time",
    category: "Backend",
    logo: "https://logo.clearbit.com/stripe.com",
    description: "Node.js expert needed for APIs and cloud services.",
  },
  {
    id: 3,
    title: "AI/ML Researcher",
    company: "BrainForge",
    location: "Remote",
    salary: "$100k–$130k",
    type: "Full-time",
    category: "AI/ML",
    logo: "https://logo.clearbit.com/openai.com",
    description: "Work on cutting-edge machine learning applications.",
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "Appify",
    location: "Austin, TX",
    salary: "$80k–$95k",
    type: "Full-time",
    category: "Mobile",
    logo: "https://logo.clearbit.com/apple.com",
    description: "Develop cross-platform mobile apps using Flutter.",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "PixelCraft",
    location: "Lalitpur, Nepal",
    salary: "Rs. 90k/month",
    type: "Full-time",
    category: "UI/UX",
    logo: "https://logo.clearbit.com/dribbble.com",
    description: "Create intuitive interfaces for mobile and web apps.",
  },
  {
    id: 6,
    title: "Full Stack Engineer",
    company: "StackStorm",
    location: "London, UK",
    salary: "£60k–£80k",
    type: "Full-time",
    category: "Full Stack",
    logo: "https://logo.clearbit.com/microsoft.com",
    description: "Develop and maintain scalable web applications.",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "InfraCloud",
    location: "Remote",
    salary: "$95k–$115k",
    type: "Full-time",
    category: "DevOps",
    logo: "https://logo.clearbit.com/docker.com",
    description: "Implement CI/CD pipelines and monitor cloud infra.",
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "DataWiz",
    location: "Boston, MA",
    salary: "$110k–$130k",
    type: "Full-time",
    category: "Data Science",
    logo: "https://logo.clearbit.com/kaggle.com",
    description: "Analyze data and build predictive models.",
  },
  {
    id: 9,
    title: "Marketing Intern",
    company: "Brandly",
    location: "Kathmandu",
    salary: "Rs. 20k/month",
    type: "Internship",
    category: "Marketing",
    logo: "https://logo.clearbit.com/mailchimp.com",
    description: "Assist with campaigns and brand research.",
  },
  {
    id: 10,
    title: "Junior Developer",
    company: "Startify",
    location: "Biratnagar",
    salary: "Rs. 50k/month",
    type: "Internship",
    category: "Frontend",
    logo: "https://logo.clearbit.com/startup.com",
    description: "Frontend development internship using React.",
  }
];


function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [applyJob, setApplyJob] = useState(null);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryClick = (cat) => setSelectedCategory(cat);

  const filteredJobs = jobData.filter((job) => {
    const matchCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    const matchSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    
    <div className="p-6 max-w-5xl mx-auto">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full px-4 py-2 border rounded mb-4"
      />
      <div className="flex flex-wrap gap-3 mb-6">
        {jobCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-1 rounded-full border text-sm ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={() => setApplyJob(job)} />
        ))
      ) : (
        <p className="text-gray-500 italic">No jobs match your search.</p>
      )}
      {applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
    </div>
  );

  
}

export default Jobs;