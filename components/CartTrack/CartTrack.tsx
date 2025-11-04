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
            <p className={css.price}>€{item.price}</p>
          </div>

          {item.location && <p className={css.location}>{item.location}</p>}

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
