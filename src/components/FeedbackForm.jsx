import React, { useState } from 'react'
import Button from './Shared/Button';
import Card from './Shared/Card'
import Rating from './Rating';

function FeedbackForm() {

    const [text, setText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setmessage] = useState('');
    const [rating, setRating] = useState(10);

    const changeHandler = (event) => {
        if (text === '') {
            setbtnDisabled(true);
            setmessage('Feedback should be atleast 10 charactes long');
        } else if (text !== '' && text.trim().length >= 10) {
            setbtnDisabled(false);
            setmessage();
        } else {
            setbtnDisabled(true);
            setmessage('Feedback should be atleast 10 charactes long');
        }
        setText(event.target.value);
    }

    const ratingfun = (input_rating) => {
        setRating(input_rating);
        console.log(rating);
    }

  return (
      <Card>
          <form>
              <h2>How would you rate our servercie?</h2>
              <Rating rating={ratingfun}/>

              <div className='input-group'>
                  <input  onChange={changeHandler} type='text' placeholder='Write your review' />
                  <Button type='submit' isDisabled={btnDisabled}>Send</Button>
              </div>
              {message && <div className='message'>{message}</div>}
          </form>
      </Card>
  )
}

export default FeedbackForm