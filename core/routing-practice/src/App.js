import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/home" element={<Home />}/>
      <Route path="/:word" element={<Main />}/>
      <Route path="/:word/:color/:coloredBackground" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;