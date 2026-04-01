import Item from "./item"
import Styles from "./item.module.css";
const Fooditems = ({items}) => {

  return (
   <ul className="list-group">
       {
       items.map(item =>(
    <Item key ={item}  foodItem={item} ></Item>
       ))}
       </ul>
  );
};
export default Fooditems;