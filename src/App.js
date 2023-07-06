import React, { useContext } from "react";
import { NavBar, Home, Cart, ContextProvider, Generics, Contact, MenProduct, Women, Accessories, Mobile, ProductDetails, SingIn, AuthCOntextProvider, NavBarHead, ProfileForm, Store, AuthContext } from "./component";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import About from "./component/About/About";

const App = () => {
  const  isLoggedIn  = useContext(AuthContext);
  return (
    <Router>
      <AuthCOntextProvider>
        <ContextProvider>
          <NavBarHead />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/1" element={<Generics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Men" element={<MenProduct />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/Mobiles" element={<Mobile />} />
            <Route path="/:id" element={<ProductDetails />} />
            <Route path="/singIn" element={<SingIn />} />
            <Route
              path="/profile"
              element={isLoggedIn ? <ProfileForm /> : <Navigate to="/" />}
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </ContextProvider>
      </AuthCOntextProvider>
    </Router>
  );
}

export default App;
