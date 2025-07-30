import './App.css'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import Dish from './interface/Dish'
import { useState, useEffect } from 'react'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json";
  
  // PENDIENTE: Variable de estado y la función de modificación. 
  let [dish, setDish] = useState<Dish[]>([]);

  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.
  useEffect(() => {
    const fetchData = async () => {
      try {  
        const response = await fetch(url);
        if (!response.ok) {
          console.error("No sirve esa url")
          return;
        }
        const responseData = await response.json()
        setDish(responseData)
      } catch(e) {
        console.error("Ocurrio un error");
      }
    }

    fetchData();
  } , [])


  


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student nombres='Nicolas' apellidos='Fiallo' paralelo={2}/>

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <DishTable data={dish}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
