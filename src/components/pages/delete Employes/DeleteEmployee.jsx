import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import './DeleteEmployee.css'

const DeleteEmployee = () => {
  return (
    <><div className="breadcrumbs">
          <p>Inicio</p>
          <p className="slash">/</p>
          <p>Gestionar Empleados</p>
          <p className="slash">/</p>
          <p>ELiminar un empleados</p>
        </div>
      <div className="box">
        <div className="eliminateBox">
          <p>Eliminar Empleados</p>
          <hr />
          <form>
            <label>Ingrese el ID</label>
            <input type="text" name="" placeholder="..." />
            <button className="delete_btn">
              <PersonRemoveIcon style={{ marginBottom: "1px" }} />
              ELIMINAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeleteEmployee;
