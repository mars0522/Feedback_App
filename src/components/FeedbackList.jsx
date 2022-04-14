import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbacks , deleteFeedback}) {

    if (!feedbacks || feedbacks.length === 0) {
        return <p>No feedbacks yet</p>
    }
    
    const deleteHandler = (id) => {
        
        deleteFeedback(id)
    }
    
  return (
      <div className='feedback-list'>
          {feedbacks.map(item => (<FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler} /> ))}
      </div>
  )
}

export default FeedbackList