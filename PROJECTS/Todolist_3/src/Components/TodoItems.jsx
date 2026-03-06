import TodoItem from "./Todoitem";
// import css from "./TodoItems.module.css";
import "../App.css";
const TodoItems = ({todoItems}) => {
  return (
  <>
  <div className="item-Container">
    {todoItems.map((item) => (
    <TodoItem todoDate={item.DueDate} todoName={item.name}>
      </TodoItem>
    ))}
  </div>
  </>
  );
};
export default TodoItems;


  
    