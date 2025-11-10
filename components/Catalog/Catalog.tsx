"use client";

import { Campers } from "@/types/campers";
import CartTrack from "../CartTrack/CartTrack";
import { useState } from "react";
import { getCatalog } from "@/lib/api";

type Props = {
  campers: Campers[];
};

const Catalog = ({ campers }: Props) => {
  const [items, setItems] = useState<Campers[]>(campers);
  const [page, setPage] = useState(1);

  const handleLoadMore = async () => {
    try {
      const nexPage = page + 1;
      const response = await getCatalog(nexPage, 4);
      setItems((prev) => [...prev, ...response.items]);
      setPage(nexPage);
    } catch (error) {
      console.error("Помилка при завантаженні:", error);
    }
  };

  return (
    <>
      <ul>
        {items.map((camper) => (
          <li key={camper.id}>
            <CartTrack item={camper} />
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
