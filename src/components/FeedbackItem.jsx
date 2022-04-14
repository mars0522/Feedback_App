import React, { useState } from 'react'
import Card from './Shared/Card'
import { FaTimes } from 'react-icons/fa'
function FeedbackItem({ item , deleteHandler}) {

  const ClickHandler = () => {
    
      deleteHandler(item.id);

  }
  
  return (
      <Card>
          <ul>
          
              <li>
                <div className='num-display'>{item.rating}</div>
              </li>
              <li>
                <button className='close' onClick={ClickHandler}>
                    <FaTimes color='purple' />
                </button>
              </li>
              <li>
                 <div className='text-display'>{item.text}</div>
              </li>
          </ul>
          
          
       </Card>
  ) 
}

export default FeedbackItem