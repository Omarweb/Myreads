import "./App.css";
import { useState } from "react";
import Listbooks from "./components/Listbooks";
import Search from "./components/Search";
import { Route, Routes } from "react-router";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Listbooks showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage} />}></Route>
        <Route exact path="/search" element={<Search showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage} />}></Route>




      </Routes>
    </div>
  );
}

export default App;
