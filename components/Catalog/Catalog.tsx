//SideBar, список кемперів

"use client";

import { Campers } from "@/types/campers";
import CartTrack from "../CartTrack/CartTrack";

type Props = {
  campers: Campers[];
};

const Catalog = ({ campers }: Props) => {
  return (
    <ul>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CartTrack item={camper} />
        </li>
      ))}
    </ul>
  );
};

export default Catalog;
