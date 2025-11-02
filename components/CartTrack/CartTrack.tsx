import { Campers } from "@/types/campers";
import Link from "next/link";

type Props = {
  item: Campers;
};
const CartTrack = ({ item }: Props) => {
  return (
    <li>
      <Link href={`/catalog/${item.id}`}>{item.name}</Link>
    </li>
  );
};

export default CartTrack;
