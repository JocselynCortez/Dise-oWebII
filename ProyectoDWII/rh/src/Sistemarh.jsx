import { useEffect, useState } from 'react'; 
import logo from './img/Logo.png'; 

function TablaDeDatos() {
  const [datos, setDatos] = useState([
    {nombre: "jocselyn"},
    {nombre: "andres"},
    {nombre: "alguien mas"},
    {id: "16485185"}
  ]);
  const [datos2, setDatos2] = useState([]);
  const [newDato, setNewDato] = useState({
    nombre: "",
    id: "",
    apellidos: "",
    salario: "",
    fechaentrada: "",
    fechasalida: "",
    horario: "",
    estado: ""
  });

  // PARA LA BASE DE DATOS
  //useEffect(() => {
   // const newDatos = funcionParaSacarDatosDeBaseDeDatos();
  //  setDatos(newDatos);
  //})

  useEffect(() => {
    setDatos2(datos)
  }, [datos])

  const agregarDato = (newDato) => {
    setDatos([...datos, newDato]);
    // funcionParaAgregarDatoABaseDeDatos();
  };

  const filtrarid = (id) => {
    const newDatos =  datos.filter(dato => {return datos.id.includes(id)})
    setDatos2 (newDatos)
  }
  //filtrarid ();

  return (


    <div className="tabla-de-datos">

  <img src={logo} alt="Logo de mi empresa"
  style={{
    width:120,
    height:120,
    marginLeft: 1500

  }}
/>
<tr> </tr>
<tr> </tr>
<tr> </tr>

    <h2>RECURSOS HUMANOS</h2> 
    <h3>Lista de Personales</h3> 
      <table>
        <thead>
          <tr>
          <th>N° Identificación</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Horario</th>
            <th>Salario</th>
            <th>Fecha Entrada</th>
            <th>Fecha Salida</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><input type="text" name="id" placeholder="N° Identificación" onChange={(e) => filtrarid(e.target.value)} /></td>

            </tr>
          {datos2.map((dato, index) => (
            <tr key={index}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.apellidos}</td>
              <td>{dato.horario}</td>
              <td>{dato.salario}</td>
              <td>{dato.fechaentrada}</td>
              <td>{dato.fechasalida}</td>
              <td>{dato.estado}</td>
      
            </tr>
          ))}
          <tr>
            <td><input type="text" value={newDato.id} onChange={(e) => setNewDato({...newDato, id: e.target.value})} placeholder="N° Identificación" /></td>
            <td><input type="text" value={newDato.nombre} onChange={(e) => setNewDato({...newDato, nombre: e.target.value})} placeholder="Nombre" /></td>
            <td><input type="text" value={newDato.apellidos} onChange={(e) => setNewDato({...newDato, apellidos: e.target.value})} placeholder="Apellidos" /></td>
            <td><input type="text" value={newDato.horario} onChange={(e) => setNewDato({...newDato, horario: e.target.value})} placeholder="Horario" /></td>
            <td><input type="text" value={newDato.salario} onChange={(e) => setNewDato({...newDato, salario: e.target.value})} placeholder="Salario" /></td>
            <td><input type="text" value={newDato.fechaentrada} onChange={(e) => setNewDato({...newDato, fechaentrada: e.target.value})} placeholder="Fecha de Entrada" /></td>
            <td><input type="text" value={newDato.fechasalida} onChange={(e) => setNewDato({...newDato, fechasalida: e.target.value})} placeholder="Fecha de Salida" /></td>
            <td><input type="text" value={newDato.estado} onChange={(e) => setNewDato({...newDato, estado: e.target.value})} placeholder="Estado" /></td>
          
          </tr>
        </tbody>
      </table>
      <form onSubmit={(e) => {
        e.preventDefault();
        // agregarDato(e.target.dato1.value, e.target.dato2.value, e.target.dato3.value);
        // e.target.dato1.value = '';
        // e.target.dato2.value = '';
        // e.target.dato3.value = '';
        agregarDato(newDato);
      }}>
        <button type="submit">Agregar</button>
        <button type="reset">Eliminar</button>
        <button type="modifide">Modificar</button>
      </form>
    </div>
  );
}


export default TablaDeDatos;


