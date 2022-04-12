import React, { useState } from 'react'
import Card from './Shared/Card'
import { FaTimes } from 'react-icons/fa'


function FeedbackItem() {

    const [rating, setRating] = useState(7);
    const [text, setText] = useState('This is a Feedback text');
  return (
      <Card>
          <div className='num-display'>{rating}</div>
          <button className='close'>
              <FaTimes color='purple' />
          </button>
          <div className='text-display'>{text}</div>
       </Card>
  )
}

export default FeedbackItem