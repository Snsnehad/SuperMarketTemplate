import React from 'react'
import CopyrightIcon from "@mui/icons-material/Copyright";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <hr style={{ backgroundColor: "black", marginTop: "10px" }} />
      <div className="footer" style={{ padding: "20px" }}>
        <div className="logo">
          <h6 style={{ fontSize: "1rem", color: "#13274F" }}>SUPER</h6>
          <h6 style={{ fontSize: "1rem", color: "#13274F" }}>MARKET</h6>
        </div>
        <div className="company-detail">
          <CopyrightIcon />
          <h5>2022 Company,Inc</h5>
        </div>
        <div className="employee_table">Tabla de empleados</div>
        <div
          className="product_table"
          style={{ marginRight: "2rem", fontSize: "1.2rem" }}
        >
          Tabla de Productos
        </div>
      </div>
    </>
  );
}

export default Footer