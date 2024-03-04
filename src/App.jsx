import React from "react";
import First from "./components/first";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee from "./components/pages/Employee/Employee";
import TableContent from './components/Table content/TableContent'
import DeleteEmployee from "./components/pages/delete Employes/DeleteEmployee";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/table" element={<TableContent />}></Route>
          <Route path="/eliminate_employee" element = {<DeleteEmployee />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
