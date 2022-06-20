import "./App.css";

import Listbooks from "./components/Listbooks";
import Search from "./components/Search";
import { Route, Routes } from "react-router";

function App() {


  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Listbooks />}></Route>
        <Route exact path="/search" element={<Search />}></Route>




      </Routes>
    </div>
  );
}

export default App;
