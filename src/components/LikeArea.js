import React, { useState } from 'react'

const LikeArea = () => {

  const [likes, setLikes] = useState(0);
  const increase = () => {
    setLikes(likes => likes + 1);
  }
  const decrease = () => {
    if (likes > 0) {
      return setLikes(likes => likes - 1);
    }
    return likes;
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <p>This page has been liked {likes} times.</p>

    </div>
  )
}

export default LikeArea
