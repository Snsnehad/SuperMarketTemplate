import SearchIcon from "@mui/icons-material/Search";
import "./TableContent.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import {Link} from "react-router-dom"
const TableContent = () => {
  return (
    <>
      <div className="tableData">
        <div className="search-bar">
          <input type="text" name="search" placeholder="Ingrese el apellido" />
          <span>
            <SearchIcon />
          </span>
        </div>
        <div className="breadcrumbs">
          <p>Inicio</p>
          <p className="slash">/</p>
          <p>Gestionar Empleados</p>
          <p className="slash">/</p>
          <p>Ver tabla d empleados</p>
        </div>
        <div className="tableContent">
          <table>
            <tr className="head">
              <th className="title">#</th>
              <th className="title">Nombre</th>
              <th className="title">Apellido</th>
              <th className="title">Telefono</th>
              <th className="title">Puesto de trabajo</th>
              <th className="title">Salario</th>
              <th className="title">Fecha de Inicio</th>
              <th className="title">Fecha finalize</th>
            </tr>
            <tr className="tableContent">
              <td className="tableBody">1</td>
              <td className="tableBody">Marcos</td>
              <td className="tableBody">Gonzalez</td>
              <td className="tableBody">1122436123</td>
              <td className="tableBody">Reponedor/a</td>
              <td className="tableBody">$ 52000.0</td>
              <td className="tableBody">2021-08-21</td>
              <td className="tableBody">2022-23</td>
            </tr>
            <tr>
              <td className="tableBody">2</td>
              <td className="tableBody">Lucas</td>
              <td className="tableBody">Hoz</td>
              <td className="tableBody">1133476826</td>
              <td className="tableBody">Gerente/a</td>
              <td className="tableBody">$ 120000.0</td>
              <td className="tableBody">2018-03-17</td>
              <td className="tableBody">-</td>
            </tr>
            <tr>
              <td className="tableBody">3</td>
              <td className="tableBody">Juana</td>
              <td className="tableBody"> Hernandez</td>
              <td className="tableBody">1124356122</td>
              <td className="tableBody">Cajero/a</td>
              <td className="tableBody">$ 64000.0</td>
              <td className="tableBody">2022-03-14</td>
              <td className="tableBody">-</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="addDelete">
        <Link to="/Employee">
          <div className="add" onClick>
            <PersonAddAltIcon className="addIcon" />
            <h4>Anadiar Empleado</h4>
          </div>
        </Link>
        
        <div className="delete" >
          <DeleteIcon className="deleteIcon" />
          <h4 className="del">Vaciar Tabla</h4>
        </div>
      </div>
    </>
  );
};

export default TableContent;
