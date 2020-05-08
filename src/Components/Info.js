import React from 'react';

const Info = ({info}) => {
    
    if(Object.keys(info).length === 0) return null; 

    // ahcemos objeto destructing 
    const { strArtistThumb, strGender, strBiographyES } = info; 

    return (  
        <div className="card border-ligth">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body" >
                
                <img src={strArtistThumb} alt="Logo Artista" />
                
                <p className="card-text">Genero: {strGender}</p>
                
                <h2 className="card-text">Genero:</h2>
                
                <p className="card-text">{strBiographyES}</p>
                
                {/* ponemos los iconos */}
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
                
            </div>
        </div>

    );
}
 
export default Info;