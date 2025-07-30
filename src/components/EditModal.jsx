import React, { useState } from "react";

function EditModal({ profile, onClose, onSave }) {
  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [about, setAbout] = useState(profile.about);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...profile, name, title, about });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">About</label>
            <textarea
              className="w-full border px-3 py-2 rounded"
              rows={4}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="text-sm px-4 py-1 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm px-4 py-1 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;