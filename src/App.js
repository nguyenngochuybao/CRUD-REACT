

import TestList from "./testList"
import AddList from "./addList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"



function App ()
{
  return (
    <div className="App">
      
        <Routes>
        <Route path="/" element={ <TestList /> }></Route>
        <Route path="/addList" element={<AddList/>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
