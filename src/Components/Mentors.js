import './mentors.css';
import React, {useState, useEffect} from 'react';




function Mentors () {
  const [mentors, setMentors] = useState([])

  useEffect(()=>{
    fetch('https://mwalimustudentpage.herokuapp.com/mentors')
    .then(res => res.json())
    .then((data)=> setMentors(data))
  },[])
  
  return (
    <div className='mymentors'>
        <div className='guimage'>
            <img 
            className='myguimage'
            src='https://d2m6ke2px6quvq.cloudfront.net/uploads/2020/07/15/8e817361-fe75-4520-815c-b438c0451d2b.jpg'
            alt=''/>
        </div>
        <div className='slogan'>
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
            className='mykaimage'
            src='https://cdn.mentorcruise.com/cache/77bf1229aa22549a3ca06322bffa9878/14d2fc4ee7156cff/6ed7c26057318e9e48c4f60375541640.jpg'
            alt=''/>
            </div>
        </div>
        <div>
          <h3 className='mentorheading'>Know your TM</h3>
        </div>

        <div className='wasee'>
          

        {mentors.map((mentor) => (
        <div key={mentor.id}>
          <div>
        <img 
        className='imagyra'
        src={mentor.image}/>
          <p className='kadogo'>{mentor.name}</p>
        </div>
        </div>))}
        </div>
        
    </div>
  )
}
export default Mentors;