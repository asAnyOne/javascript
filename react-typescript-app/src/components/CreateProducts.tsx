import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 14,
  },
};

interface CreateProductsProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProducts({ onCreate }: CreateProductsProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      setError("Please enter valid title!");
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <form onSubmit={submitHandler}>
      <input
        name="title"
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title ..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className=" py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Creat
      </button>
    </form>
  );
}
