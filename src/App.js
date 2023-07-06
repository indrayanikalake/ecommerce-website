import React, { useContext } from "react";
import { NavBar, Home, Cart, ContextProvider, Generics, Contact, MenProduct, Women, Accessories, Mobile, ProductDetails, AuthCOntextProvider, NavBarHead, ProfileForm, Store, AuthContext, SignIn } from "./component";
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
            <Route exact path="/" element={<Home />} />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/1" element={<Generics />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/Men" element={<MenProduct />} />
            <Route exact path="/Women" element={<Women />} />
            <Route exact path="/Accessories" element={<Accessories />} />
            <Route exact path="/Mobiles" element={<Mobile />} />
            <Route exact path="/:id" element={<ProductDetails />} />
            <Route exact path="/signIn" element={<SignIn />} />
            <Route
              exact path="/profile"
              element={isLoggedIn ? <ProfileForm /> : <Navigate to="/" />}
            />
            <Route exact path="/*" element={<Navigate to="/" />} />
          </Routes>
        </ContextProvider>
      </AuthCOntextProvider>
    </Router>
  );
}

export default App;
