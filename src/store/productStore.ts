import { create } from "zustand";
import { dataType } from "../../types";

interface ProductStoreType {
  products: dataType[] | [];
  addProduct: (prod: dataType[]) => void;
  deleteProduct: (id: number) => void;
}

export const ProductStore = create<ProductStoreType>()((set) => ({
  products: [],
  addProduct: (product: dataType[]) => set(() => ({ products: product })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((prod) => prod.id !== id),
    })),
}));
