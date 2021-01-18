import React from 'react'

/* Props */
export interface MultipleSliderShowProps {
  images: string
}

const MultipleSliderShow: React.FC<MultipleSliderShowProps> = props => {
  const { images } = props
  const test = 'I am books page'

  return (
    <div>
      {images}
      {test}
    </div>
  )
}

export default MultipleSliderShow
