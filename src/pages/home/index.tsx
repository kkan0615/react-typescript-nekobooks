import React, { useState } from 'react'

const HomeIndex: React.FC = () => {
  const myFirstMessage = useState('Hello neko books!')

  return (
    <div>
      {myFirstMessage}
    </div>
  )
}

export default HomeIndex
