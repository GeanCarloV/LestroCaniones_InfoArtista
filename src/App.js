import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import Cancion from './Components/Cancion';
import Info from './Components/Info';
import axios from 'axios'; 


function App() {

  const [busquedaLetra, guardarBusquedaLetra] = useState({}); 
  const [letra, guardarLetra] = useState('') ;
  const [ info, guardarInfo ] = useState({})


  useEffect(() => { 

    if(Object.keys(busquedaLetra).length === 0 ) return;
    
    
    const consultarApiLetra = async () => { 
      
      const { artista, cancion} = busquedaLetra; 
      
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      
      const [Letra, informacion ] = await Promise.all([   
        axios(url), 
        axios(url2)
      ]);

      guardarInfo(informacion.data.artists[0]);   
      guardarLetra(Letra.data.lyrics);


    }

    consultarApiLetra();


  }, [busquedaLetra, info]);


  return (
    <Fragment> 
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-6">
            <Info 
              info={info}
            />
          </div>
          
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        
        </div>
      </div>

    </Fragment>
    );
}

export default App;
