import { ReviewsType } from "@/types/campers";
import css from "./Reviews.module.css";

interface ReviewsProps {
  reviews: ReviewsType[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  if (!reviews?.length) {
    return <p>No review yet.</p>;
  }
  const starArray = [0, 1, 2, 3, 4];

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.reviewer_name}>
          <div>{review.reviewer_name.charAt(0).toUpperCase()}</div>

          <div>
            <div>
              <p>{review.reviewer_name}</p>
              <div>
                {starArray.map((index) => (
                  <svg
                    key={index}
                    className={
                      index < review.reviewer_rating ? css.starActive : css.star
                    }
                  >
                    <use href="/icons/icons.svg#icon-star"></use>
                  </svg>
                ))}
              </div>
            </div>

            <p>{review.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
