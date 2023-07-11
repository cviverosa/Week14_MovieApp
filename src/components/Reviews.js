// import React, { useState } from "react";
// import Ratings from "./Ratings";

// export default class Reviews extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//     this.state = {
//       reviews: [
//         {
//           id: props.id,
//           userName: props.userName,
//           userReview: props.userReview,
//           ratings: props.ratings,
//         },
//       ],
//     };
//   }

//   render() {
//     const { reviews } = this.state;

//     return (
//       <div>
//         {reviews.map((review) => (
//           <div key={review.id}>
//             <h4>Movie: {review.id}</h4>
//             <p>Rating: {review.rating}</p>
//             <p>Review: {review.review}</p>
//             <p>Username: {review.username}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
import React from "react";

class Reviews extends React.Component {
  render() {
    const { userName, userReview, ratings } = this.props.review;

    return (
      <div>
        <p>Rating: {ratings}</p>
        <p>Review: {userReview}</p>
        <p>Username: {userName}</p>
      </div>
    );
  }
}

export default Reviews;
