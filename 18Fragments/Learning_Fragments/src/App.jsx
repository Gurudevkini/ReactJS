import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./Components/Fooditems";
import Errormsg from "./Components/errorMessage";
import React from "react";
function App() {
    const fooditems = ['Gobi','Mysore pak',"Panner","Gobi-chilly"];
const  fooditems1 =[];
  return ( 
  <Container>
  <Errormsg items={fooditems1}></Errormsg>
  <Fooditems items={fooditems}></Fooditems>
</Container>


);
}
export default App;

















 /* 18.learning the concept of fragments
  
  when you JSX CODE IS RETURNING IT SHOULD 
  BE RETURNED IN A SINGLE TAG So raping everything in <div> or <center>

  PROBLEM IS YOU WILL ENDED UP WITH EXTRA DIV

  SO HERE FRAGMENTS COMES INTO THE PICTURE 
  FIRST WE  ARE Going to import REACT FIRST
  THAN NEXT THING IS TO USE React.Fragment insted of Div
  in console its not visible and extra line will be saved 
  at the same time everytime is been Wraped under the React!

  SO </> this is used to prefered insted of React.Fragments


  
  return(
<>
    <h1>SUNDAY CANTEEN FOODS </h1>
    <ul class="list-group">
      <li class="list-group-item">MASALA DOSA + TEA </li>
      <li class="list-group-item">PALAVU </li>
      <li class="list-group-item">PANNER BHIRYANI </li>
      <li class="list-group-item">PODDI + TEA</li>
     <li class="list-group-item">JEERA RICE + GOBI/PANNER CHILLY</li>}
    </ul>
</>
  );
}
*/
/* 19.+++ MAP METHOD +++
  
So we have array and need to be written in a single li statemtent
so how can be it written ?
item =><li class="list-group-item">Gobi</li>

first as the class is defined cerate a open bracket with 
let x.map(inside this start with anything y=> <li class=asan> type anything<li>) here it will think array
as empty and thing we need to type it what ever is wrriteen in the array 
so it will contiue the trend and bulid down the things

NOW I WANT TO OPEN THE ARRAY 
so {item} it will open the array
*/
/*
let fooditems =['Gobi','Mysore pak', "Panner","Gobi-chilly"];
 return(
<>
    <h1>SUNDAY CANTEEN FOODS </h1>
    <ul className="list-group">
       {
        fooditems.map(item =>
        <li key={item} className="list-group-item">{item}</li>
      )}
    </ul>
</>
  );
}
  *


/* Till Now whatever code you

20. Conditonal Rendring:-
 Here its like giving the conditions
 it could be if else statments
 ternary operators 
 logical operators
using if
 if(fooditems1.length===0) return
 <h3> I AM STILL HUNGRY</h3>;
 now return could be possibly replaced by  ternary operator ?

 using ternary operators 
 {fooditems1.length===0 ? <h3> I AM STILL HUNGRY</h3>: null}
 ANOTHER method U CAN use is 
let emptyMessgae=fooditems1.length===0 ? <h3> I AM STILL HUNGRY</h3>: null
console.log(emptyMessgae) 
IF ITS NULL THAN IT WOULDNT EFFECT THE CODE 

using logical operations 
should be inside the JSX condition 
return <>
(
{fooditems1.length===0  && <h3> I AM STILL HUNGRY</h3>}
):
</>
*/
//let fooditems =['Gobi','Mysore pak', "Panner","Gobi-chilly"];


//console.log(emptyMessgae)
//  return( 
// <>
//     <h1>SUNDAY CANTEEN FOODS </h1>
//     <ul className="list-group">
//        {
//         fooditems.map(item =>
//         <li key={item} className="list-group-item">{item}</li>
//       )
//     </ul>
// </>
//   );

  

/* MOST IMP NOTES:-
if you use class than it will give error in the console
insted of that use className

 */ 

/*
PASSING DATA Via PROPS
frist we will divied it into compoents
so unessaryliy you dont have to divied the things in components 
insted do one thing very simple and stright forward
if you can give tittle for it than do components else not requried 


PROPS IS FUNCTION USED TO CONNECT THE CHILD NODE WITH THERE PARENT 
SO here i have used something like Each time i have to create new item
and it would be meesy so what we have come up with is 
function Abc (props.example) => 
{
  }

 <Abc><Abc> could directly defined
 
and another method is array destructing here
first let {foodItem}= props;
*/