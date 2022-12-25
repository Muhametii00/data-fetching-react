import { useRef, useState } from "react";
import { Products } from "../Products";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Product } from "./shared/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const elementRef1 = useRef<HTMLButtonElement | null>(null);
  const elementRef2 = useRef<HTMLButtonElement | null>(null);

  const executeScrollTop = () => {
    if (elementRef2.current) {
      elementRef2.current.scrollIntoView();
    }
  };

  const executeScrollBottom = () => {
    if (elementRef1.current) {
      elementRef1.current.scrollIntoView();
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
      <button
        ref={elementRef2}
        className="scroll-view"
        onClick={executeScrollBottom}
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
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

      <button
        ref={elementRef1}
        className="scroll-view"
        onClick={executeScrollTop}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
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
