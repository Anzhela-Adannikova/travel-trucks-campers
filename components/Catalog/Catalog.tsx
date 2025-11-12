"use client";

import { useCatalogStore } from "@/lib/store/catalogStore";
import CardTrack from "../CardTrack/CardTrack";
import { Campers } from "@/types/campers";
import css from "./Catalog.module.css";

interface CatalogProps {
  initialCampers: Campers[];
}

const Catalog = ({ initialCampers }: CatalogProps) => {
  const { campers, fetchFilteredCampers, page, filters } = useCatalogStore();

  const hasActiveFilters = Object.keys(filters).length > 0;
  const campersToShow = hasActiveFilters ? campers : initialCampers;

  const handleLoadMore = async () => {
    await fetchFilteredCampers(undefined, page + 1);
  };

  if (campersToShow.length === 0) {
    return <p className={css.text}>No campers found for this search</p>;
  }

  return (
    <section className={css.catalogSection}>
      <ul className={css.list}>
        {campersToShow.map((camper) => (
          <li key={camper.id}>
            <CardTrack item={camper} />
          </li>
        ))}
      </ul>

      {campersToShow.length > 0 && (
        <div className={css.loadMoreWrapper}>
          <button
            type="button"
            onClick={handleLoadMore}
            className={css.loadMoreBtn}
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
};

export default Catalog;
