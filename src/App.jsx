import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react" 
import Results from "./components/Results"

function App() {

  const[value, setValue] = useState({ initInv: Number(10000), annInv: Number(10000), expRet: Number(5), duration: Number(3)})

  const inputValid = value.duration >=1;

  function handleInput(selector, inpVal){
      setValue((prevVal) => ({
          ...prevVal ,
          [selector]: +inpVal //+ converts string to number, as in JS all input pass value as string only
      }))
  }

  return (
    <>
    <Header></Header>
    <UserInput input={value} handleInput={handleInput}></UserInput>
    {inputValid && <Results rawInvestmentData={value}> </Results>}
    {!inputValid && <p className="center">
      Please enter valid duration greater than 0</p>}
    </>
    
  )
}

export default App
