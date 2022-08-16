import {useReducer} from "react"
import "./App.css";

const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer (state, {type, payload}){
switch(type) {
  case ACTION.ADD_DIGIT:
    return {
      ...state, 
      currenOperand: `${currentOperand}${payload.digit}`
    }
}
}

function App() {
 const [{currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer,{})
  dispatch()
 return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>*</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button> 
    </div>
  );
}

export default App;
