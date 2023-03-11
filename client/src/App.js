import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cars from "./components/Cars";
import Accessories from "./components/Accessories";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import EditCar from "./components/EditCar";
import AddCar from "./components/AddCar";
import EditProfile from "./components/EditProfile";
import AddAccessorie from "./components/AddAccessorie";
import EditAccessorie from "./components/EditAccessorie";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/edit-car/:id" element={<EditCar />}/>
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route path="/add-accessorie" element={<AddAccessorie />} />
        <Route path="/edit-accessorie/:id" element={<EditAccessorie />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
