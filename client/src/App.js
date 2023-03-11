import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cars from "./components/Cars";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
