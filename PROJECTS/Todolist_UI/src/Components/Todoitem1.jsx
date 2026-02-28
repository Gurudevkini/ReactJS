function TodoItem1()
{
  let todoName ='BUY MILK';
  let todoDate ='4/10/2023 ';
  return (
    <div>
    <div className="row">
    <div className="col-6">
    {todoName}
    </div>
    <div className="col-4" >{todoDate} </div>
    <div className="col-2">
<button type="button" className="btn btn-danger">Delete</button>
</div>
</div>
</div>

  )
}
export default TodoItem1;