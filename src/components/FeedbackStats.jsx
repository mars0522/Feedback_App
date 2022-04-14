import React from 'react'

function FeedbackStats({ feedback }) {

    let Average = feedback.reduce((acc, curr) => {
        return acc + curr.rating;
    }, 0) / feedback.length;

  return (
      <div className='feedback-stats'>
          <h4>{feedback.length} Reviews</h4>
          <h4>Average rating : {isNaN(Average)?0:Average.toFixed(2)}</h4>
      </div>
  )
}

export default FeedbackStats