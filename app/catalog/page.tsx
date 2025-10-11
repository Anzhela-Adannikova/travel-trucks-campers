// сторінка каталогу з фільтрами, списком кемперів, пагінаціє
// app/catalog/page.tsx
// — головна сторінка каталогу
// — отримує initial campers (через SSR)
// — підключає компонент CatalogClient

import Catalog from "@/components/Catalog/Catalog";
import { getCatalog } from "@/lib/api";

// app/catalog/CatalogClient.tsx
// — Client Component (з "use client")
// — зберігає стан фільтрів і сторінки (через useState або TanStack Query)
// — викликає API-функції з lib/api/campers.ts
// — передає дані в SidebarFilters і CartTrack
const Carts = async () => {
  const response = await getCarts();
  // console.log("campers", campers);

  return (
    
      <section>
            {response?.carts?.length > 00 <Catalog carts={response.carts} />}
      </section>
    
  );
};

export default Catalog;
