import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [desc, setDesc] = useState(false);
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price} </p>
      <button
        className="py-2 px4 border bg-yellow-400 "
        onClick={() => {
          setDesc((desc) => !desc);
        }}
      >
        {desc ? "Hide desc" : "Show desc"}
      </button>
      <p>{desc && product.description}</p>
    </div>
  );
}
