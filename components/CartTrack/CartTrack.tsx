// деталі кемперу, картка
// app/catalog/CatalogClient.tsx
// — Client Component (з "use client")
// — зберігає стан фільтрів і сторінки (через useState або TanStack Query)
// — викликає API-функції з lib/api/campers.ts

// import { Campers } from "@/types/campers";
// import Catalog from "../Catalog/Catalog";

// — передає дані в SidebarFilters і CartTrack
// type CartTrackProps = {
//   camper: Campers[];
// };

// const CartTrack = ({ camper }: CartTrackProps) => {
//   return (
//     <div>
//       <h2>{camper.name}</h2>
//       <p>{camper.location}</p>
//       <p>{camper.price} €/день</p>
//     </div>
// <ul>
//   {campers.map((camper) => (
//     <Catalog key={camper.id} item={camper} />
//   ))}
// </ul>
//   );
// };

// export default CartTrack;
