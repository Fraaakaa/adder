import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(value){
    setInputValue(value)
  }

  function handleClick(){
    if (inputValue != ""){
      setItem([...item, inputValue]);
      setInputValue("");
    }

  }

  function handleEnter(keyCode){
    if (keyCode == 13){
      handleClick();
    }
  }

  function handleErasure(position){
    const newItem = item.filter((item, key) => {
      return key != position;
    })
    setItem(newItem)
  }

  return <div className="App">
    <Search handleCallback={handleChange} value={inputValue} handleEnter={handleEnter}/>
    <Button handleCallback={handleClick}/>
    <List handleCallback={handleErasure}item={item}/>
  </div>;
}

export default App;
