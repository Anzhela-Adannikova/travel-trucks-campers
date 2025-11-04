// сторінка каталогу з фільтрами, списком кемперів, пагінаціє
// app/catalog/page.tsx
// — головна сторінка каталогу
// — отримує initial campers (через SSR)
// — підключає компонент CatalogClient
// "use client";
// SSR
import Catalog from "@/components/Catalog/Catalog";
import { getCatalog } from "@/lib/api";
// import { Campers } from "@/types/campers";
// import { useState } from "react";

const CatalogList = async () => {
  // const [campers, setCampers] = useState<Campers[]>([]);

  // const handleClick = async () => {
  const response = await getCatalog();
  console.log("response:", response);

  const campers = response.items;
  // if (response.items.length > 0) {
  // setCampers(response.items);
  // }
  // };

  return (
    <section>
      <h1></h1>
      {/* <button onClick={handleClick}>Get</button> */}
      {campers?.length > 0 && <Catalog campers={campers} />}
    </section>
  );
};

export default CatalogList;
