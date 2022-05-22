import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Accounts from "../pages/Accounts";
import Transactions from "../pages/Transactions";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Error from "../pages/Error";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Accounts" element={<Accounts />}></Route>
        <Route path="/Transactions" element={<Transactions />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
