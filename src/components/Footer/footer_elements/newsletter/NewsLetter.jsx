import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div>
       <div className='news-text'>
       <p>Receive our latest updates about our products and promotions.
        </p>
       </div>
        <form>
            <input type='email' placeholder='Email'></input>
            <Button type='submit' className='new-submit'>Subscribe </Button>
        </form>
        <div className='btn-grp'>
          <Button><i className="fa-brands fa-facebook"></i></Button>
          <Button><i className="fa-brands fa-linkedin"></i></Button>
          <Button><i className="fa-brands fa-youtube"></i></Button>
          <Button><i className="fa-brands fa-twitter"></i></Button>
          <Button><i className="fa-brands fa-instagram"></i></Button>
        </div>
    </div>
  )
}

export default NewsLetter