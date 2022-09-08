import { useState } from "react";
import { CreateProducts } from "./components/CreateProducts";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loading } from "./components/Loading";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/useProducts";
import { IProduct } from "./models";

function App() {
  const { loading, error, products, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => setModal(false)}>
          <CreateProducts onCreate={createHandler} />
        </Modal>
      )}
      <button
        onClick={() => setModal(true)}
        className=" fixed py-2 px-4  bottom-5 right-5 rounded-full bg-red-700 text-white text-3xl  "
      >
        +
      </button>
    </div>
  );
}

export default App;
