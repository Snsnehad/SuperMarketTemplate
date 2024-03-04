import "./first.css";

function First() {
  return (
    <>
      <div className="adminPage">
        <div className="admin">
          <h3 className="heading">Bienvenido</h3>
          <p>(Inicio del panel de administrator)</p>
        </div>
        <div className="card">
          <div className="empl">
            <h2>Empleados Activos</h2>
            <hr style={{ marginTop: "10px" }} />
            <p className="count">2</p>
          </div>
          <div className="empl">
            <h2>Productos Listados</h2>
            <hr style={{ marginTop: "10px" }} />
            <p className="count">3</p>
          </div>
        </div>
        <h5
          style={{
            margin: "auto 20px",
            textAlign: "center",
            fontSize: "1.2rem",
            marginTop: "1rem",
            fontWeight: 500,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi
          repudiandae architecto doloremque molestiae quas.
        </h5>
      </div>
    </>
  );
}

export default First;
