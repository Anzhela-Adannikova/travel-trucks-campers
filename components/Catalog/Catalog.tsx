"use client";

import { useCatalogStore } from "@/lib/store/catalogStore";
import CartTrack from "../CartTrack/CartTrack";
import { Campers } from "@/types/campers";

interface CatalogProps {
  initialCampers: Campers[];
}

const Catalog = ({ initialCampers }: CatalogProps) => {
  const { campers, fetchFilteredCampers, page } = useCatalogStore();
  const campersToShow = campers.length > 0 ? campers : initialCampers;

  const handleLoadMore = async () => {
    await fetchFilteredCampers(undefined, page + 1);
  };

  return (
    <>
      <ul>
        {campersToShow.map((camper) => (
          <li key={camper.id}>
            <CartTrack item={camper} />
          </li>
        ))}
      </ul>

      {campersToShow.length > 0 && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
