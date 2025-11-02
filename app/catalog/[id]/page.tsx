import { getCartDetail } from "@/lib/api";
import css from "./CartDetails.module.css";
import Image from "next/image";
import CamperFeatures from "@/components/CamperFeatures/CamperFeatures";

// сторінка конкретного кемпера (деталі, відгуки, бронювання)
type Props = {
  params: { id: string };
};

const CartDetails = async ({ params }: Props) => {
  const { id } = params;
  const camper = await getCartDetail(id);
  console.log(camper);

  return (
    <section className={css.detailSection}>
      <h1 className={css.name}>{camper.name}</h1>
      <p className={css.location}>{camper.location}</p>
      <p className={css.price}>€{camper.price}</p>

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
      </div>

      <p className={css.description}>{camper.description}</p>

      <CamperFeatures camper={camper} />
    </section>
  );
};

export default CartDetails;
