import { allItems } from "@/shared/mock";
import { allItemsKz } from "@/shared/mock/items/items-kz";

export const getItemsByLocale = (locale: string) => {
  switch (locale) {
    case 'ru':
      return allItems;
    case 'kz':
      return allItemsKz;
    default:
      return allItems;
  }
};
