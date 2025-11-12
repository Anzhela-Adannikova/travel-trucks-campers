import { getCardDetail } from "@/lib/api";
import CardDetails from "./CardDetails";

type Props = {
  params: Promise<{ id: string }>;
};

const CardPage = async ({ params }: Props) => {
  const { id } = await params;
  const camper = await getCardDetail(id);

  return <CardDetails camper={camper} />;
};

export default CardPage;
