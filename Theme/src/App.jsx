import "./App.css";


import Home from "./Componenets/Home/Home";
import Page from "./Componenets/Page/Page";
import { useState } from "react";

function App() {
  const [theme , setTheme] = useState({});
  const [collection ,setCollection] = useState([])
  const [isPageVisible , setIsPageVisible] = useState(false)
  


  function showPage(index){
    setTheme({...collection[index]})
    setIsPageVisible(true);
  }
  console.log(collection)
  return <div>
    {isPageVisible ? <Page theme = {theme}  setIsPageVisible = {setIsPageVisible}/>
    :

    <Home setCollection = {setCollection} collection = {collection} showPage ={showPage} />
    }
    
    {/* <AddMenu/> */}
  </div>;
}

export default App;
