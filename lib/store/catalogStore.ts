import { CamperFilter, Campers } from "@/types/campers";
import { create } from "zustand";
import { getFilteredCampers } from "../api";

interface CatalogStore {
  campers: Campers[];
  filters: CamperFilter;
  page: number;
  setFilters: (filters: CamperFilter) => void;
  fetchFilteredCampers: () => Promise<void>;
}

export const useCatalogStore = create<CatalogStore>((set, get) => ({
  campers: [],
  filters: {},
  page: 1,

  setFilters: (filters) => {
    set({ filters, campers: [], page: 1 });
  },

  fetchFilteredCampers: async () => {
    const { filters, page } = get();

    try {
      const response = await getFilteredCampers(filters, page, 4);
      set({ campers: response.items });
    } catch (error) {
      console.error("Помилка при отриманні кемперів:", error);
    }
  },
}));
