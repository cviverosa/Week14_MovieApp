// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Reviews from "./Reviews";
// import Ratings from "./Ratings";

// export function ReviewForm({ movieId }) {
//   const [newReview, setNewReview] = useState("");
//   const [newName, setNewName] = useState("");
//   const [reviews, setReviews] = useState([]);
//   const [value, setValue] = useState(null);

//   const submitForm = () => {
//     var newReviewObj = {
//       userName: newName,
//       userReview: newReview,
//       ratings: value,
//     };

//     setReviews([...reviews, newReviewObj]);
//     setNewReview("");
//     setNewName("");
//     setValue(null);
//   };

//   function handleRating(newValue) {
//     setValue(newValue);
//   }

//   return (
//     <div>
//       <Form>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Ratings rating={handleRating} />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//           <Form.Label className="movieText">Name:</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Name"
//             onChange={(e) => setNewName(e.target.value)}
//           />
//           <Form.Label className="movieText">Write your review:</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={newReview}
//             onChange={(e) => setNewReview(e.target.value)}
//           />
//           <Button variant="primary" type="reset" onClick={() => submitForm()}>
//             Publish
//           </Button>
//         </Form.Group>
//       </Form>
//       <br></br>
//       <div id="renderedReviews">
//         {reviews.map((review, index) => {
//           return <Reviews key={index} review={review} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default ReviewForm;
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Reviews from "./Reviews";
import Ratings from "./Ratings";

export function ReviewForm({ movieId }) {
  const [newReview, setNewReview] = useState("");
  const [newName, setNewName] = useState("");
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState(null);

  const submitForm = () => {
    var newReviewObj = {
      userName: newName,
      userReview: newReview,
      ratings: value,
    };

    setReviews([...reviews, newReviewObj]);
    setNewReview("");
    setNewName("");
    setValue(null);
  };

  function handleRating(newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Ratings onRatingChange={handleRating} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="movieText">Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setNewName(e.target.value)}
          />
          <Form.Label className="movieText">Write your review:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <Button variant="primary" type="reset" onClick={() => submitForm()}>
            Publish
          </Button>
        </Form.Group>
      </Form>
      <br></br>
      <div id="renderedReviews">
        {reviews.map((review, index) => (
          <Reviews key={index} review={review} />
        ))}
      </div>
    </div>
  );
}

export default ReviewForm;
