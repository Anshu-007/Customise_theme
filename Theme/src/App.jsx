import "./App.css";
import bg from './assets/bg.png'
import Home from "./Componenets/Home/Home";
import Page from "./Componenets/Page/Page";
import { useState } from "react";
function App() {
  const [theme , setTheme] = useState({});
  const [collection ,setCollection] = useState([])
  const [isPageVisible , setIsPageVisible] = useState(false)
  




  return <div>
    <Home setCollection = {setCollection} collection = {collection} />
    <Page theme = {theme}/>
  </div>;
}

export default App;
