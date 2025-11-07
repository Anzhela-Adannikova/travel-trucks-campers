import Catalog from "@/components/Catalog/Catalog";
import SideBar from "@/components/SideBar/SideBar";
import { getCatalog } from "@/lib/api";

const CatalogList = async () => {
  const response = await getCatalog(1, 4);
  const campers = response.items;

  return (
    <section>
      <SideBar />
      {campers?.length > 0 && <Catalog campers={campers} />}
    </section>
  );
};

export default CatalogList;
