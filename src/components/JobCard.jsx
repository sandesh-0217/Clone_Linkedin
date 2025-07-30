import React from "react";

function JobCard({ job, onApply }) {
  return (
    <div className="bg-white p-5 rounded-md shadow-md mb-6">
      <div className="flex items-center gap-4">
        <img src={job.logo} alt={job.company} className="w-12 h-12 rounded" />
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
          <p className="text-sm text-gray-500">{job.type} • {job.salary}</p>
        </div>
      </div>
      <p className="text-sm mt-3 text-gray-700">{job.description}</p>
      <div className="flex gap-4 mt-4">
        <button onClick={() => onApply(job)} className="bg-blue-600 text-white px-4 py-1 rounded">Apply</button>
      </div>
    </div>
  );
}

export default JobCard;