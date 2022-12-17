interface Props {
  onOpen: () => void;
}

export const Button = (props: Props) => {
  return (
    <div className="add_button" onClick={props.onOpen}>
      <span>Add New</span>
      <div className="add_button__circle">
        <img src="./src/assets/icons/union.svg" alt="Add New Icon" />
      </div>
    </div>
  );
};
