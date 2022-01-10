import React from 'react'

import Review from "./Review"

const ReviewList = (props) => {
  //debugger

    const reviewArr = props.reviewData.map(review =>{
      return <Review
      key = {review.id}
      name={review.name}
      rating={review.rating}
      content={review.content}/>
    })


  return(
    <div>
      {reviewArr}
    </div>
  )
}

export default ReviewList
