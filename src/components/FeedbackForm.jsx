import React, { useState } from 'react'
import Button from './Shared/Button';
import Card from './Shared/Card'

function FeedbackForm() {

    const [text, setText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setmessage] = useState('');

    const changeHandler = (event) => {
        if (text === '') {
            setbtnDisabled(true);
            setmessage(null);
        } else if (text !== '' && text.trim().length >= 10) {
            setbtnDisabled(false);
            setmessage('Feedback should be atleast 10 charactes long');
        } else {
            setbtnDisabled(true);
            setmessage(null);
        }
        setText(event.target.value);
    }

  return (
      <Card>
          <form>
              <h2>How would you rate our servercie?</h2>
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