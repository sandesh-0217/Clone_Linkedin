import React, { useState } from "react";

function Post({ user, content, likes }) {
  const [likeCount, setLikeCount] = useState(likes);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{user}</h3>
      <p className="my-2">{content}</p>
      <button onClick={() => setLikeCount(likeCount + 1)} className="text-blue-600">Like ({likeCount})</button>
    </div>
  );
}

export default Post;