import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieReviews } from 'queries';

export default function Reviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState('');

  useEffect(() => {
    getMovieReviews(movieId).then(setReview);
  }, [movieId]);

  return (
    <>
      {review.length === 0 ? (
        <p>We dont have any reviews for this movie</p>
      ) : (
        <ul>
          {review.map(review => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
