import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addProduct(product: IProduct) {
    setProducts((prevProd) => [...prevProd, product]);
  }

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (err: unknown) {
      setLoading(false);
      const error = err as AxiosError;

      setError(error.message);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, addProduct };
}
