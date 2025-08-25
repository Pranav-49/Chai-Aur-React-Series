import React from 'react'

const Card = () => {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img className="size-48 shadow-xl rounded-md " alt="" src="../public/myimg.webp" />
      </div>
      <div class="flex">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
      </div>
  )
}

export default Card
