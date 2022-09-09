import './mentors.css';
import React from 'react'

function Mentors () {
  return (
    <div className='mentors'>
        <div className='guimage'>
            <img 
            className='myguimage'
            src='https://d2m6ke2px6quvq.cloudfront.net/uploads/2020/07/15/8e817361-fe75-4520-815c-b438c0451d2b.jpg'
            alt=''/>
        </div>
        <div>
            <span className='discover'>Discover.</span><span className='grow'>Grow.</span><span className='transform'>Transform.</span>
        </div>
        <div className='message'>
            <div className='writings'>
                <h3>Best Mentors For Your Specific<br/>
                Needs</h3>
                <p>Learn everything you need to know on choosing the best mentoring programs in<br />
                2022. Get matched with the right mentor for personal and professional growth.</p>
            </div>
            <div className='kaimage'>
            <img 
            className='myguimage'
            src='https://cdn.mentorcruise.com/cache/77bf1229aa22549a3ca06322bffa9878/14d2fc4ee7156cff/6ed7c26057318e9e48c4f60375541640.jpg'
            alt=''/>

            </div>
        </div>
    </div>
  )
}
export default Mentors;