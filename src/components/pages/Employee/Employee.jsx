import "./employee.css";

import React from "react";

export default function () {
  return (
    <>
      <p
        style={{
          fontSize: "2.5 rem",
          marginTop: "10px",
          marginLeft:  "10px",
        }}
      >
        Inicio / Gestionar / Anadiar un emleado
      </p>
        <form className="form">
          <div className="formItem">
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Ingrese el nombre..."
              className="formInput"
            ></input>
          </div>
          <div className="formItem">
            <label>Apellido</label>
            <input
              type="text"
              placeholder="Ingrese el apellido.."
              className="formInput"
            ></input>
          </div>
          <div className="formItem">
            <label>Telefono</label>
            <input
              type="text"
              placeholder="Ingrese el telefono..."
              className="formInput"
            ></input>
          </div>
          <div className="flexContainer">
            <div className="containerItem">
              <label>Puesto de Trabjo</label>
              <select className="itemSelect" name="Selecciona" id="Selecciona">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="containerItem">
              <label>Salario</label>
              <div className="salary">
                <span className="currency">$</span>
                <input
                  type="text"
                  placeholder="Ingrese el salary"
                  className="itemSelect"
                />
              </div>
            </div>
            <div className="containerItem">
              <label>Fecha da Inicio</label>
              <input
                type="date"
                id="Fecha d Inicio"
                name="fecha d Inicio"
                className="itemSelect"
              />
            </div>
          </div>
        </form>
    </>
  );
}
