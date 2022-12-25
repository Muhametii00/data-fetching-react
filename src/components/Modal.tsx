import { useState } from "react";

interface Props {
  addNew: string;
  add: string;
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, description: string, price: number) => void;
}

export const Modal = (props: Props) => {
  const [formSubmit, setFormSubmit] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleSubmitChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormSubmit((previousState) => {
      const target = event.target as HTMLInputElement;

      return {
        ...previousState,
        [target.name]: target.value,
      };
    });
  };
  const handleOnAdd = (event: React.MouseEvent) => {
    event.preventDefault();

    props.onAdd(formSubmit.title, formSubmit.description, +formSubmit.price);
  };

  return (
    <div
      className={`add_modal ${props.isOpen ? "add_modal--shown" : ""}`}
      id="add-modal"
    >
      <div className="add_modal__wrapper">
        <span
          id="close-modal"
          className="add_modal__close"
          onClick={props.onClose}
        >
          <img src="./src/assets/icons/exit.svg" />
        </span>
        <form className="add_modal__form" id="add-form">
          <h5>{props.addNew}</h5>

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formSubmit.title}
            onChange={handleSubmitChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formSubmit.price}
            onChange={handleSubmitChange}
          />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={formSubmit.description}
            onChange={handleSubmitChange}
          ></textarea>
          <button type="submit" onClick={handleOnAdd}>
            {props.add}
          </button>
        </form>
      </div>
    </div>
  );
};
