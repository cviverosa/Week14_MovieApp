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
