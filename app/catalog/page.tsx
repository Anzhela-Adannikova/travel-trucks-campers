// сторінка каталогу з фільтрами, списком кемперів, пагінаціє
// app/catalog/page.tsx
// — головна сторінка каталогу
// — отримує initial campers (через SSR)
// — підключає компонент CatalogClient

import { getCatalog } from "@/lib/api";

const Catalog = async () => {
  const carts = await getCatalog();

  console.log("carts", carts);

  return <div>Catalog</div>;
};

export default Catalog;
