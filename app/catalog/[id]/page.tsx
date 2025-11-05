import { getCartDetail } from "@/lib/api";
import css from "./CartDetails.module.css";
import Image from "next/image";
import CamperFeatures from "@/components/CamperFeatures/CamperFeatures";
import BookingForm from "@/components/BookingForm/BookingForm";

// сторінка конкретного кемпера (деталі, відгуки, бронювання)
type Props = {
  params: { id: string };
};

const CartDetails = async ({ params }: Props) => {
  const { id } = await params;
  const camper = await getCartDetail(id);

  return (
    <section className={css.detailSection}>
      <h3 className={css.name}>{camper.name}</h3>

      {/* rating */}
      <div className={css.meta}>
        <div className={css.rating}>
          <svg className={css.starIcon} width="16" height="16" aria-hidden>
            <use href="/icons/icons.svg#icon-star" />
          </svg>
          <span className={css.ratingValue}>{camper.rating}</span>
          <span className={css.reviewCount}>
            ({camper.reviews?.length ?? 0} review)
          </span>
        </div>

        {/* location */}
        <div className={css.locationBlock}>
          <svg className={css.mapIcon} width="16" height="16" aria-hidden>
            <use href="/icons/icons.svg/#icon-Map" />
          </svg>
          <span className={css.location}>
            {camper.location?.split(",").reverse().join(",")}
          </span>
        </div>
      </div>

      <p className={css.price}>€{camper.price.toFixed(2)}</p>

      <div className={css.img}>
        {Array.isArray(camper.gallery) && camper.gallery.length > 0 ? (
          camper.gallery.map((img) => (
            <Image
              key={img.thumb}
              src={img.thumb}
              alt={camper.name}
              width={292}
              height={312}
            />
          ))
        ) : (
          <p>Img not found</p>
        )}

        <div className={css.description}>
          <p>{camper.description}</p>
        </div>
      </div>

      <CamperFeatures camper={camper} />

      <BookingForm />
    </section>
  );
};

export default CartDetails;
