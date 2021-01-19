import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import MultipleSliderShow from '../../../components/common/MutipleSlideShow'
import { sampleBooksData } from '../../interfaces/book/book'

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
      <MultipleSliderShow books={sampleBooksData} number={5} />
      <Button
        onClick={handleClick}
      >
        Test button
      </Button>
      {myFirstMessage}
    </div>
  )
}

export default HomeIndex
