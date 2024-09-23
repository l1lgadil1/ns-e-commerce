import { api } from "@/shared/api";

export const getAdvertisings = async () => {
  const res = await api.get('/stocks');
  return res.data;
};
