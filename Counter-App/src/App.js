import logo from './logo.svg';
import './App.css';
import { store } from './Redux/store';
import { useState } from 'react';
import { handleAddActionObj, handleReduceActionObj,handleDoubleActionObj,handleResetActionObj,handleHalfActionObj,handleSquareActionObj } from './Redux/action';


function App() {
const {dispatch,subscribe} =store;
const {count} = store.getState();
const [update,setUpdate] =useState(0);

subscribe(()=>{
 
  setUpdate((prev)=>prev+1);
})





  return (
   <div className='wrapper'>
     <div className="App">
<div className="App1" >
<h1>Count:{count}</h1>    
<button className='button-69' style={{backgroundColor:"blue"}} onClick={()=>dispatch(handleAddActionObj(1))}>Add</button> 
<button disabled={count===0} className='button-69' style={{backgroundColor:"red",marginLeft:"20px"}} onClick={()=>dispatch(handleReduceActionObj(1))}>Reduce</button>
<button disabled={count===0} className='button-69' style={{backgroundColor:"teal",marginLeft:"20px"}} onClick={()=>dispatch(handleResetActionObj(1))}>Reset</button>
<button disabled={count===0} className='button-69' style={{backgroundColor:"pink",marginLeft:"20px"}} onClick={()=>dispatch(handleDoubleActionObj(2))}>double</button>
<button disabled={count===0} className='button-69' style={{backgroundColor:"aqua",marginLeft:"20px"}} onClick={()=>dispatch(handleHalfActionObj(2))}>Half</button>
<button disabled={count===0} className='button-69' style={{backgroundColor:"green",marginLeft:"20px"}} onClick={()=>dispatch(handleSquareActionObj(1))}>Square</button>




</div>
    </div>
   </div>
  );
}

export default App;
