import React, { useState } from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guarBusqeuda] = useState({ 
        artista: '', 
        cancion: '' 
    }); 

    const [error, guarError] = useState(false); 
    
    const {artista, cancion} = busqueda; 


    const actualizarState = e => {
        guarBusqeuda({ 
            ...busqueda, 
            [e.target.name] : e.target.value
        })
    }

    const buscarInformacion = e => {
        e.preventDefault(); 
        if(artista.trim() === '' || cancion.trim() === '' ){
            guarError(true); 
            return
        }
        guarError(false); 
        // pasamos le objeto a app.js
        guardarBusquedaLetra(busqueda)
    }

    return (
         <div className="bg-info">

            {/* revismaos si el erro es cieto */}
            {error ? <p className="alert alert-danger text-center p-2"> Todos los campos son obligatorios pe</p> : null }

            <div className="container">
                <div className="row">
                    
                    <form
                        onSubmit={buscarInformacion}
                        className="col card tex-white bg-transparent mb-5 pt-5 pb-2"
                    >
    
                        <fieldset> 
                            <legend className="text-center">Buscador Letras Caciones por Gean V</legend>

                            <div className="row"> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                            
            
                                <div className="col-md-6">
                                    <div className="form-group">
                                            <label>Cancion</label>
                                            <input type="text"
                                                className="form-control"
                                                name="cancion"
                                                placeholder="Nombre Cancion"
                                                onChange={actualizarState}
                                                value={cancion}
                                            />
                                    </div>
                                </div>
                            </div>
                            
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>

                        </fieldset>

                    </form>             

                </div>
            </div>
         </div>

         );
}
 
export default Formulario;