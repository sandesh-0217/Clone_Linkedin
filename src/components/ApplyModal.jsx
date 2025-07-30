import React, { useState } from "react";

function ApplyModal({ job, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Applied to:", job.title, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">Apply to {job.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <div className="flex justify-between mt-4">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
            <button onClick={onClose} type="button" className="text-gray-500 underline">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyModal;