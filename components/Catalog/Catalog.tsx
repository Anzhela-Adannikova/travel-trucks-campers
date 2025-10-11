//SideBar, список кемперів
"use client";

import { Campers } from "@/types/campers";

type Props = {
  item: Campers;
};

const Catalog = ({ item }: Props) => {
  return (
    <li>
      <p>{item.name}</p>
    </li>
  );
};

export default Catalog;
