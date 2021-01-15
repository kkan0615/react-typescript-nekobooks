import React, { useState } from 'react'

const Error404: React.FC = () => {
  const errorMessage = useState('404')

  return (
    <div>
      {errorMessage}
    </div>
  )
}

export default Error404
