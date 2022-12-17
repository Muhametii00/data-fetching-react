interface Props {
  addNew: string;
  add: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = (props: Props) => {
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

          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="price" placeholder="Price" />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
          <button type="submit">{props.add}</button>
        </form>
      </div>
    </div>
  );
};
