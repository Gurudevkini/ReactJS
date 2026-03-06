import Display from "./components/Display";
import Styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
function App() {

  return ( 
  <div className={Styles.calculator}>
  <Display></Display>
  <ButtonsContainer></ButtonsContainer>
    </div>
);
}

export default App
