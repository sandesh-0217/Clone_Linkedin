import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    name: "Sandesh Karki",
    title: "Frontend Developer at CodeCraft",
    avatar: "https://i.pravatar.cc/150?img=13",
    content: "Just finished building a LinkedIn clone using React and TailwindCSS! Excited to share it with you all. 🚀",
    type: "photo",
    image: "https://cdn.dribbble.com/users/619/screenshots/17830315/media/01c3eb7a4345bc82e263130c826152ac.png?compress=1&resize=768x576",
    time: "5m",
    comments: [],
  },
  {
    id: 2,
    name: "Anita Sharma",
    title: "AI Researcher at Fusemachines",
    avatar: "https://i.pravatar.cc/150?img=18",
    content: "Exploring the use of LLMs in education is truly fascinating. #AI #ChatGPT #EdTech",
    type: "text",
    time: "30m",
    comments: [],
  },
  {
    id: 3,
    name: "Sagar Pandey",
    title: "Cloud Engineer at AWS Nepal",
    avatar: "https://i.pravatar.cc/150?img=19",
    content: "This is how we scaled a Node.js microservice from 100 to 10,000+ requests per second using AWS Lambda. ☁️",
    type: "article",
    time: "1h",
    comments: [],
  },
  {
    id: 4,
    name: "Nisha Rai",
    title: "UX Designer at Bajra Technologies",
    avatar: "https://i.pravatar.cc/150?img=20",
    content: "Design is not just what it looks like — it’s how it works. Here’s a UI kit I recently created 👇",
    type: "photo",
    image: "https://cdn.dribbble.com/userupload/8581624/file/original-26fe580cb80bc1d343d49fc167b7b91e.png?compress=1&resize=768x576",
    time: "3h",
    comments: [],
  },
  {
    id: 5,
    name: "Aayush KC",
    title: "Cybersecurity Intern at TechSansar",
    avatar: "https://i.pravatar.cc/150?img=21",
    content: "🔐 Top 5 tips to protect your passwords online. Don’t use your birthday, folks!",
    type: "text",
    time: "4h",
    comments: [],
  },
  {
    id: 6,
    name: "Priya Joshi",
    title: "DevOps Intern at Fusemachines",
    avatar: "https://i.pravatar.cc/150?img=22",
    content: "Here's a breakdown of how our CI/CD pipeline automates everything from testing to production deployment. 👇",
    type: "video",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    time: "6h",
    comments: [],
  },
  {
    id: 7,
    name: "Rajiv Shrestha",
    title: "Data Analyst at CloudFactory",
    avatar: "https://i.pravatar.cc/150?img=23",
    content: "📊 Visualizing data using D3.js is so fun! Check out this interactive chart I made.",
    type: "photo",
    image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=800&q=60",
    time: "8h",
    comments: [],
  },
  {
    id: 8,
    name: "Poonam Thapa",
    title: "Web Designer at CreativeEdge",
    avatar: "https://i.pravatar.cc/150?img=24",
    content: "🔥 CSS Grid vs Flexbox: Which one do you prefer and why?",
    type: "text",
    time: "10h",
    comments: [],
  },
  {
    id: 9,
    name: "Deepak Khadka",
    title: "React Developer at Leapfrog",
    avatar: "https://i.pravatar.cc/150?img=25",
    content: "Just created a reusable React component library. Can't wait to open-source it soon! 💻",
    type: "photo",
    image: "https://cdn.dribbble.com/users/528264/screenshots/16771638/media/41a7c7b4742f329d638a7118e1e09913.png?compress=1&resize=768x576",
    time: "12h",
    comments: [],
  },
  {
    id: 10,
    name: "Bishal Rai",
    title: "AI ML Engineer at Fusemachines",
    avatar: "https://i.pravatar.cc/150?img=26",
    content: "Training a computer vision model to detect plant diseases — open-source project coming soon. 🌱",
    type: "video",
    video: "https://www.w3schools.com/html/movie.mp4",
    time: "16h",
    comments: [],
  },
  {
    id: 11,
    name: "Kritika Koirala",
    title: "Python Developer at Deerwalk",
    avatar: "https://i.pravatar.cc/150?img=27",
    content: "🐍 Python is love. Just solved 100+ Leetcode problems this week. Feeling strong!",
    type: "text",
    time: "1d",
    comments: [],
  },
  {
    id: 12,
    name: "Sushant Gautam",
    title: "Network Engineer at NTC",
    avatar: "https://i.pravatar.cc/150?img=28",
    content: "This is how our team optimized routing for thousands of concurrent users. #Networking",
    type: "article",
    time: "2d",
    comments: [],
  },
];

function Feed() {
  const [posts, setPosts] = useState(
    initialPosts.map((post) => ({ ...post, liked: false }))
  );
  const [newComments, setNewComments] = useState({});

  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === postId ? { ...p, liked: !p.liked } : p
      )
    );
  };

  const handleCommentChange = (postId, text) => {
    setNewComments((prev) => ({ ...prev, [postId]: text }));
  };

  const handleAddComment = (postId) => {
    const text = newComments[postId]?.trim();
    if (!text) return;

    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [...p.comments, { text, id: Date.now() }],
            }
          : p
      )
    );

    setNewComments((prev) => ({ ...prev, [postId]: "" }));
  };

  return (
    <div className="space-y-4">
      {/* Create Post UI */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Start a post"
            className="flex-1 bg-gray-100 px-4 py-2 rounded-full text-sm outline-none"
          />
        </div>
        <div className="flex justify-around mt-4 text-sm text-gray-600">
          <button className="flex items-center gap-1 hover:text-blue-600">📷 Photo</button>
          <button className="flex items-center gap-1 hover:text-green-600">🎥 Video</button>
          <button className="flex items-center gap-1 hover:text-orange-600">📝 Article</button>
        </div>
      </div>

      {/* Render Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-start gap-3">
            <img
              src={post.avatar}
              alt={post.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{post.name}</h3>
              <p className="text-xs text-gray-500">
                {post.title} • {post.time}
              </p>
              <p className="mt-2 text-sm text-gray-700">{post.content}</p>

              {/* Photo or Video */}
              {post.type === "photo" && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="mt-3 rounded-lg"
                />
              )}
              {post.type === "video" && (
                <video
                  src={post.video}
                  controls
                  className="mt-3 rounded-lg w-full max-h-[300px]"
                />
              )}

              {/* Like, Comment, Share */}
              <div className="flex justify-around text-sm text-gray-600 mt-3 border-t pt-2">
                <button
                  className={`flex items-center gap-1 ${
                    post.liked ? "text-blue-600 font-semibold" : ""
                  }`}
                  onClick={() => toggleLike(post.id)}
                >
                  👍 {post.liked ? "Liked" : "Like"}
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  💬 Comment
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  🔁 Share
                </button>
              </div>

              {/* Comments */}
              <div className="mt-4 space-y-2">
                {post.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-gray-100 rounded-md px-3 py-1 text-sm"
                  >
                    {comment.text}
                  </div>
                ))}

                {/* Comment input */}
                <div className="flex items-center mt-2 gap-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComments[post.id] || ""}
                    onChange={(e) => handleCommentChange(post.id, e.target.value)}
                    className="flex-1 text-sm px-3 py-1 border rounded-md"
                  />
                  <button
                    onClick={() => handleAddComment(post.id)}
                    className="text-blue-600 text-sm font-semibold"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;