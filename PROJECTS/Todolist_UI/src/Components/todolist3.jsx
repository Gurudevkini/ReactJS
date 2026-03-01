function TodoItem3()
{
  let todoName="Complete projects ";
  let todoDate= "4/10/2023";
  return (
    <div>
    <div className="row row1">
    <div className="col-6">
    {todoName}
    </div>
    <div className="col-4" >{todoDate} </div>
    <div className="col-2">
<button type="button" className="btn btn-danger button1">Delete</button>
</div>
</div>
</div>

  )
}
export default TodoItem3;