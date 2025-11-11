// import { CamperFilter, Campers, CampersResponse } from "@/types/campers";
// import { create } from "zustand";
// import { getFilteredCampers } from "../api";

// interface CatalogStore {
//   campers: Campers[];
//   filters: CamperFilter;
//   page: number;
//   setFilters: (filters: CamperFilter) => void;
//   fetchFilteredCampers: (filters?: CamperFilter) => Promise<void>;
// }

// export const useCatalogStore = create<CatalogStore>((set, get) => ({
//   campers: [],
//   filters: {},
//   page: 1,

//   setFilters: (filters) => {
//     set({ filters, campers: [], page: 1 });
//   },

//   fetchFilteredCampers: async (filtersArg?: CamperFilter, pageArg?: number) => {
//     const { filters, page } = get();
//     const activeFilters = filtersArg || filters;
//     const activePage = pageArg || page;

//     try {
//       const response: CampersResponse = await getFilteredCampers(
//         activeFilters,
//         activePage,
//         4
//       );
//       set((state) => ({
//         campers:
//           activePage > 1
//             ? [...state.campers, ...response.items]
//             : response.items,
//         page: activePage,
//       }));
//     } catch (error) {
//       console.error("Помилка при отриманні кемперів:", error);
//     }
//   },
// }));
import { create } from "zustand";
import { CamperFilter, Campers, CampersResponse } from "@/types/campers";
import { getFilteredCampers } from "@/lib/api";

interface CatalogStore {
  campers: Campers[];
  filters: CamperFilter;
  page: number;
  setFilters: (filters: CamperFilter) => void;

  fetchFilteredCampers: (
    filtersArg?: CamperFilter,
    pageArg?: number
  ) => Promise<void>;
}

export const useCatalogStore = create<CatalogStore>((set, get) => ({
  campers: [],
  filters: {},
  page: 1,

  setFilters: (filters) => {
    set({ filters, campers: [], page: 1 });
  },

  fetchFilteredCampers: async (newFilter?: CamperFilter, newPage?: number) => {
    const { filters, page, campers } = get();
    const activeFilters = newFilter || filters;
    const activePage = newPage || page;

    try {
      const response: CampersResponse = await getFilteredCampers(
        activeFilters,
        activePage,
        4
      );
      set({
        campers:
          activePage > 1 ? [...campers, ...response.items] : response.items,
        page: activePage,
        filters: activeFilters,
      });
    } catch (error) {
      console.error("Помилка при отриманні кемперів:", error);
    }
  },
}));
