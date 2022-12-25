import { useRef, useState } from "react";
import { Products } from "../Products";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Product } from "./shared/Product";

export const Home = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const executeScroll = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView();
    }
  };

  const [productsList, setProductsList] = useState(Products);
  const [state, setState] = useState(false);

  const handleOpen = () => setState(true);
  const handleClose = () => setState(false);

  const handleRemove = (id: number) => {
    setProductsList((previousList) => {
      return previousList.filter((products) => products.id != id);
    });
  };

  const handleAdd = (title: string, description: string, price: number) => {
    setProductsList((previousList) => {
      return [
        {
          id: Math.random(),
          title: title,
          description: description,
          price: price,
          thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        },
        ...previousList,
      ];
    });
    setState(false);
  };

  return (
    <>
      <button onClick={executeScroll}>Scroll to bottom</button>
      <Button onOpen={handleOpen} />
      <section className="products-sectiom" id="products-section">
        {productsList.map((products) => (
          <Product
            key={products.id}
            product={products}
            onRemove={handleRemove}
          />
        ))}
      </section>
      <Button onOpen={handleOpen} />

      <div ref={elementRef}>Bottom element</div>
      <Modal
        isOpen={state}
        onClose={handleClose}
        onAdd={handleAdd}
        addNew="Add New"
        add="Add"
      />
    </>
  );
};
