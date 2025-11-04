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
    <ul className={css.list}>
      {reviews.map((review) => (
        <li key={review.reviewer_name} className={css.item}>
          <div className={css.avatar}>
            {review.reviewer_name.charAt(0).toUpperCase()}
          </div>

          <div>
            <div className={css.header}>
              <p className={css.name}>{review.reviewer_name}</p>
              <div className={css.star}>
                {starArray.map((index) => (
                  <svg
                    key={index}
                    width={16}
                    height={16}
                    className={
                      index < review.reviewer_rating ? css.starActive : css.star
                    }
                  >
                    <use href="/icons/icons.svg#icon-star"></use>
                  </svg>
                ))}
              </div>
            </div>

            <p className={css.comment}>{review.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
