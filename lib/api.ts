import { CamperFilter, Campers, CampersResponse } from "@/types/campers";
import axios from "axios";

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCatalog = async (
  page: number = 1,
  limit: number = 4
): Promise<CampersResponse> => {
  const res = await axios.get<CampersResponse>(`${BASE_URL}/campers`, {
    params: { page, limit },
  });

  return res.data;
};

export const getCartDetail = async (id: string) => {
  const res = await axios.get<Campers>(`${BASE_URL}/campers/${id}`);
  return res.data;
};

export const getFilteredCampers = async (
  filters?: CamperFilter,
  page: number = 1,
  limit: number = 4
): Promise<CampersResponse> => {
  const params: Record<string, string | boolean | number> =
    // об’єкт, де ключ — це рядок, а значення може бути або рядком, або числом, або булевим значенням (true/false)
    {
      page,
      limit,
    };

  if (filters?.location) params.location = filters.location;

  if (filters?.AC) params.AC = true;
  if (filters?.Automatic) params.Automatic = true;
  if (filters?.Kitchen) params.Kitchen = true;
  if (filters?.TV) params.TV = true;
  if (filters?.Bathroom) params.Bathroom = true;

  if (filters?.form) params.form = filters.form;

  try {
    const res = await axios.get<CampersResponse>(`${BASE_URL}/campers`, {
      params,
    });
    return res.data;
  } catch (error) {
    console.error("Помилка при отриманні кемперів:", error);
    throw error;
  }
};
