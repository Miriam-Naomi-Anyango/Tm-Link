import './reviews.css';
import React, {useState, useEffect} from 'react';

function Reviews () {
    const [reviews, setReviews] = useState([])
  
    useEffect(()=>{
      fetch('https://mwalimustudentpage.herokuapp.com/reviews')
      .then(res => res.json())
      .then((data)=> setReviews(data))
    },[])
  return (
  <div>
    {reviews.map((review) => (
    <div key={review.id}>
      <div className='myreviews'>
      <div className='allreviews'>
        <p>{review.mentor}</p>
        <p>{review.score}</p>
        <p>{review.comment}</p>
        <p>{review.student}</p>
      </div>
      </div>
    </div>))}
  </div>
  )
}
export default Reviews;