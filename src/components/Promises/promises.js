import {itemsData} from "../data/products";
export const itemsApi = new Promise ((resolve , reject) => {
  setTimeout (() => {
    resolve (itemsData);
  }, 2000);
});