//SideBar, список кемперів
"use client";

// import { useEffect, useState } from "react";
// import CartTrack from "../CartTrack/CartTrack";
// import { getCatalog } from "@/lib/api/serverApi";
// import { Campers } from "@/types/campers";

// export default function Catalog() {
//   const [campers, setCampers] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     getCatalog(page)
//       .then((data: Campers[]) => {
//         setCampers((prev) => [...prev, ...data]);
//       })
//       .catch((error) => console.error("Error", error));
//   }, [page]);

//   return (
//     <section>
//       <div>
//         {campers.map((camper) => (
//           <CartTrack key={camper.id} camper={camper} />
//         ))}
//       </div>

//       <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
//     </section>
//   );
// }
