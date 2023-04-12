import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/style.css";

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
import { UserContextProvider } from "./contexts/UserContext";
import SuccessfulOrder from "./components/SuccessfulOrder";
import { UserItemsContextProvider } from "./contexts/UserItemsContext";
import IsUser from "./components/ProtectedRoutes/IsUser";
import IsAdmin from "./components/ProtectedRoutes/IsAdmin";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Fragment>
      <UserContextProvider>
        <UserItemsContextProvider>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<IsUser />}>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/edit-profile/:id" element={<EditProfile />} />
            </Route>
            <Route element={<IsAdmin />}>
              <Route path="/edit-car/:id" element={<EditCar />} />
              <Route path="/add-car" element={<AddCar />} />
              <Route path="/add-accessorie" element={<AddAccessorie />} />
              <Route path="/edit-accessorie/:id" element={<EditAccessorie />} />
            </Route>
            <Route path="/successfulOrder" element={<SuccessfulOrder />} />
            <Route path="/*" element={<ErrorPage />}/>
          </Routes>
        </UserItemsContextProvider>
      </UserContextProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
