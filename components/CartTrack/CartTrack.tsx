import { Campers } from "@/types/campers";
import Link from "next/link";
import Image from "next/image";
import css from "./CartTrack.module.css";
import Button from "../Button/Button";

type Props = {
  item: Campers;
};

const CartTrack = ({ item }: Props) => {
  return (
    <article>
      <Link href={`/catalog/${item.id}`}>
        <div>
          <Image
            src={item.gallery?.[0]?.thumb}
            alt={item.name}
            width={292}
            height={330}
            className={css.img}
          />
        </div>

        <div className={css.info}>
          <div className={css.header}>
            <h3 className={css.name}>{item.name}</h3>
            <p className={css.price}>€{item.price.toFixed(2)}</p>
            <svg className={css.likeHeart} width={26} height={24}>
              <use href={"/icons/icons.svg#icon-heart"}></use>
            </svg>
          </div>

          <div className={css.rating}>
            <svg className={css.starIcon} width="16" height="16" aria-hidden>
              <use href="/icons/icons.svg#icon-star" />
            </svg>
            <span className={css.ratingValue}>{item.rating}</span>
            <span className={css.reviewCount}>
              ({item.reviews?.length ?? 0} review)
            </span>

            <svg className={css.mapIcon} width="16" height="16" aria-hidden>
              <use href="/icons/icons.svg/#icon-Map" />
            </svg>
            <span className={css.location}>
              {item.location?.split(",").reverse().join(",")}
            </span>
          </div>

          {item.description && (
            <p className={css.description}>{item.description}</p>
          )}
        </div>
        <Button text="Show more" variant="primary" />
      </Link>
    </article>
  );
};

export default CartTrack;
