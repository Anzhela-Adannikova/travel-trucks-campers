import { Campers, CampersResponse } from "@/types/campers";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCatalog = async (): Promise<CampersResponse> => {
  const res = await axios.get<CampersResponse>("/campers");
  return res.data;
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// export const getCart = async () => {
//   await delay(2000);
//   const res = await axios.get<CampersResponse>("/campers");
//   return res.data;
// };

export const getCartDetail = async (id: string) => {
  const res = await axios.get<Campers>(`/campers/${id}`);
  return res.data;
};
