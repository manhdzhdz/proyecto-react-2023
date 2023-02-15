import { useEffect,useState } from "react";
import axios from "axios";
import "./App.css"

function App() {
  //crear una constante para guardar la varieble de entorno
  const API_URL=import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState();
  useEffect(() => {
    axios.get(`${API_URL}assets`)
    .then((data) => {
      // console.log(data)
      setCriptos(data.data.data)
    })
    .catch(()=>{
      console.error("La petición falló")
    })
  }, []);

  if (!criptos) return <span>CARGANDO</span>


  return (
    <>
    <h1>LISTA DE CRIPTOMONEDAS</h1>
    <ol>
      {
        criptos.map(({id,name,priceUsd}) => (
          <li key={id}>Nombre: {name} Precio:{priceUsd}</li>
        ))
      }
    </ol>
    </>

  )
}

export default App
