import { StorageIds } from "@/shared/consts";

export const getLocalStorage = (key:StorageIds) => {
  if (typeof window !== 'undefined') {
    window.localStorage.getItem(key);
  }
  return null;
};
export const setLocalStorage = (key:StorageIds, val:any) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(val));
  }
  return null;
};
