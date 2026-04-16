import "./App.css"

function Greeting(props)
{
  return<h1> Hello , I am {props.name} , I am {props.age} years old and i am a state level {props.sports}  </h1>
}
function App()
{
  const name= getname()
  const age = 20;
  return <>
  <diV>
    <Greeting name={"gurudev kini"} age={20} sports={"circkter in my Dreams :)"}/>
    <Greeting name={"Rohan Kini"} age={14} sports={"Chess player"}/>
    <Greeting age={" IDK WHAT TO DO 18"}></Greeting>
   <Greeting2 name={"Gurudev Kini"} age={20}/>
    </diV>
    
      </>

}

function Greeting2({name , age} )
{
  return <h1> ______________________________________________________________________
    Honestly So this is just a file that i have created to understand what is happening in the react js 
    i have taken 2 parameters that is name and the age to get to know what is happening  and also my name is {name}and i am {age} years old </h1>
}


function getname()
{
  return "GURU";
}
export default App;


/* WHAT IS JSX?
 rendring its a revolautizing way to write the JS 
 its like Html in JS


 APp it is not a normal function when you return something you will acutally written JSX 
 COMPONET = function that return JSX 

 WE ARE TAKING A FUNCTION 

 THE MAIN ADVTANGE I CAN USE IT MAY TIMES !
 

 Props:- is the pass data down to the componenst 
*/