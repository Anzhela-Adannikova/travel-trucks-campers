import { getCartDetail } from "@/lib/api";
import CartDetails from "./CartDetails";

type Props = {
  params: Promise<{ id: string }>;
};

const CartPage = async ({ params }: Props) => {
  const { id } = await params;
  const camper = await getCartDetail(id);

  return <CartDetails camper={camper} />;
};

export default CartPage;
