import { useState } from "react";
import { Products } from "../Products";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Product } from "./shared/Product";

export const Home = () => {
  const [state, setState] = useState(false);

  const handleOpen = () => setState(true);
  const handleClose = () => setState(false);

  return (
    <>
      <Button onOpen={handleOpen} />
      <section className="products-sectiom" id="products-section">
        {Products.map((products) => (
          <Product key={products.id} product={products} />
        ))}
      </section>
      <Button onOpen={handleOpen} />
      <Modal isOpen={state} onClose={handleClose} addNew="Add New" add="Add" />
    </>
  );
};
