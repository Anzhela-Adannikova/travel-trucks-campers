// import { CamperFilter, Campers } from "@/types/campers";
// import axios from "axios";

// export const nextServer = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// export const getFiltersCamper = async (
//   filters: CamperFilter
// ): Promise<Campers[]> => {
//   const { page = 1, limit = 4, ...rest } = filters;
//   const params = new URLSearchParams();

//   Object.entries(rest).forEach(([key, value]) => {
//     if (value !== undefined && value !== false && value !== "") {
//       params.append(key, String(value));
//     }
//   });
//   params.append("page", String(page));
//   params.append("limit", String(limit));

//   const { data } = await nextServer.get<Campers[]>(
//     `/campers?${params.toString()}`
//   );
//   return data;
// };
import { Campers } from "@/types/campers";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
export const getCatalog = async () => {
  const response = await axios.get<Campers>("/campers");
  return response.data;
};

// export async function getCatalog(page: number): Promise<Campers[]> {
//   const response = await axios.get<Campers[]>(`/campers?page=${page}&limit=4`);
//   return response.data;
// }
