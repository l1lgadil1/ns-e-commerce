import { api } from "@/shared/api";

export const getProduct = async (id:string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
