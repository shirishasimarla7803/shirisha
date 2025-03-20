import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>

        {/* <Navbar />
        <Signup />
        <Signin />
        <News /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
