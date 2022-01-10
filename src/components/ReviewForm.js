import React, { useState } from "react"


const ReviewForm = (props) =>{
    const [review, setReview] = useState({
        name:"",
        rating: "",
        content: ""
    })

    //debugger

    const handleInputChange = event => {
        console.log(event.currentTarget.value)
        //debugger
        setReview({...review, [event.currentTarget.name]: event.currentTarget.value})
    }

    const submitReview = event => {
        console.log("Hit Submitter")
        console.log(review)

        event.preventDefault()
        props.reviewSubmitter(review)
    }

    return(
        <>
            <form onSubmit={submitReview}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={review.name} onChange={handleInputChange}></input>

                <label htmlFor="rating">Score</label>
                <input type="text" id="rating" name="rating" value={review.rating} onChange={handleInputChange}></input>

                <label htmlFor="content">Review</label>
                <input type="text" id="content" name="content" value={review.content} onChange={handleInputChange}></input>

                <input type="submit" value="Submit Review"></input>
            </form>
        </>
    )
}

export default ReviewForm