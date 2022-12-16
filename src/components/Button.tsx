interface Props{
    addNew: string;
}

export const Button = (props: Props) => {
    return <div className="add_button">
    <span>{props.addNew}</span>
    <div className="add_button__circle">
      <img src="./src/assets/icons/union.svg" alt="Add New Icon" />
    </div>
    </div>
}