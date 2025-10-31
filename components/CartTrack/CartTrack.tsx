import { Campers } from "@/types/campers";

type Props = {
  item: Campers;
};
const CartTrack = ({ item }: Props) => {
  console.log("Rendering CartTrack:", item);
  return (
    <>
      <p>{item.name}</p>
    </>
  );
};

export default CartTrack;
