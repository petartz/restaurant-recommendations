import React, { useState } from "react"
import _ from "lodash"
import ReviewList from "./ReviewList.js"

import ReviewForm from "./ReviewForm.js"
import Restaurant from "./Restaurant"

import reviewData from "../constants/reviews"
//import restaurantData from "../constants/restaurants"


const App = props => {
  const [reviews, setReviews] = useState(reviewData)

  const getNextId = (reviews) => {
    const max = _.maxBy(reviews, review => review.id)
    return max.id + 1
  }

  const reviewSubmitter = (newReview) =>{
    newReview.id = getNextId(reviews)
    setReviews([...reviews, newReview])
  }

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <Restaurant/>
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Review Form</h3>
            <ReviewForm reviewSubmitter={reviewSubmitter}/>

          </div>

          <div className="cell">
            <h3>Reviews</h3>
            <ReviewList reviewData={reviews}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
