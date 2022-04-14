import React, { useState } from 'react'
import Button from './Shared/Button';
import Card from './Shared/Card'
import Rating from './Rating';

function FeedbackForm({addFeedback}) {

    const [text, setText] = useState('Write your review..');
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

    const ratingFun=(r)=>{
       
        setRating(r);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();

        const newFeedback = {
            text: text,
            rating:rating,
        }

        addFeedback(newFeedback);
        setText(''); // why this is not executing
        
    }

  return (
      <Card>
          <form onSubmit={submitHandler}>
              <h2>How would you rate our service?</h2>
              <Rating fun={ ratingFun}/>

              <div className='input-group'>
                  <input onChange={changeHandler} value={text } type='text' placeholder='Write your review' />
                  <Button type='submit' isDisabled={btnDisabled}>Send</Button>
              </div>
              {message && <div className='message'>{message}</div>}
          </form>
      </Card>
  )
}

export default FeedbackForm