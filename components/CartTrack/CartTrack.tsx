// деталі кемперу, картка
// app/catalog/CatalogClient.tsx
// — Client Component (з "use client")
// — зберігає стан фільтрів і сторінки (через useState або TanStack Query)
// — викликає API-функції з lib/api/campers.ts

import { Campers } from "@/types/campers";
import Catalog from "../Catalog/Catalog";

// — передає дані в SidebarFilters і CartTrack
type Props = {
  campers: Campers[];
};

const CartTrack = ({ campers }: Props) => {
  return (
    <ul>
      {campers.map((camper) => (
        <Catalog key={camper.id} item={camper} />
      ))}
    </ul>
  );
};

export default CartTrack;
