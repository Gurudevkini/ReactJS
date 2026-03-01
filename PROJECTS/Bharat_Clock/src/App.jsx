import './App.css';
import Clockslogan  from  './components/clockSlogan';
import CurrentTime from './components/clock';
import ClockHeading  from './components/clockHeading';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <center>
    <ClockHeading></ClockHeading>
   <Clockslogan></Clockslogan>
    <CurrentTime></CurrentTime>
   </center>
  )
}

export default App
