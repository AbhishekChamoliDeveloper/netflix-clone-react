import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/sign-in" Component={SignIn} />
        <Route exact path="/main" Component={Main} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
