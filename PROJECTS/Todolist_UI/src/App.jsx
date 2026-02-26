import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <div className="container text-center">
        <h1>TODO React App</h1>

        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>

          <div className="col-4">
            <input type="date" />
          </div>

          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">4/01/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;