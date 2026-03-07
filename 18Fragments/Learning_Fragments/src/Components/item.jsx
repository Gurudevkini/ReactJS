import Styles from "./item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`list-group-item guru ${Styles.guru}`}>
      <span className="guru span">{foodItem}</span>

      <button
        className={`${Styles.button} btn btn-success`}
        onClick={() => console.log(`${foodItem} being bought`)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
