import Image from "next/image";
import css from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={css.container}>
        <Image
          className={css.heroImg}
          src="/image/home_image.webp"
          alt="camper"
          width={1440}
          height={696}
        />
        <div className={css.hero}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <button className={css.heroBtn}>View Now</button>
        </div>
      </section>
    </main>
  );
}
