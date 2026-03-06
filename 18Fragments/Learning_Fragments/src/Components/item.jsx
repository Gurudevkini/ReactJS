//import Styles from "./item.module.css";
//import Styles from "../styles/item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`list-group-item guru ${Styles.guru}`}>
      <span className="guru span">{foodItem}</span>
    </li>
  );
};

export default Item;

// import Styles from "./item.module.css";
// const Item = ({foodItem}) =>{
// return (  
  
//  <li className={ `list-group-item guru ${Styles.guru}`}>
//  <span className= "guru span">{foodItem}</span> 
//  </li>
      
// );     
//   };
//   export default Item;