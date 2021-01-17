import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'

const HomeIndex: React.FC = () => {
  const myFirstMessage = useState('Hello neko books!')

  useEffect(() => {
    console.log('Effect test: ' + myFirstMessage)
    console.log('-------------')
  })

  const handleClick = () => {
    console.log(myFirstMessage)
    console.log('handle click')
  }

  return (
    <div>
      <Button
        onClick={handleClick}
      >
        Test button
      </Button>
      <button type="button">Test 2</button>
      {myFirstMessage}
    </div>
  )
}

export default HomeIndex
