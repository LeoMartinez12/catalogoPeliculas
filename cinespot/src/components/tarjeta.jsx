import './tarjeta.css';

function Tarjeta({ elemento, alCambiarFavorito, alSeleccionar }) {
  return (
    <div className="tarjeta-pelicula">
      {/* Al hacer clic en la imagen, se abren los detalles */}
      <div 
        className="tarjeta-imagen-contenedor"
        onClick={() => alSeleccionar(elemento)}
      >
        <img 
          src={elemento.imagen} 
          alt={`Póster de ${elemento.titulo}`} 
          className="tarjeta-imagen" 
        />
      </div>
      
      <div className="tarjeta-info">
        <h4 className="tarjeta-titulo">{elemento.titulo}</h4>
        {/* Aquí mostramos un par de datos sutiles debajo del título, como en el wireframe */}
        <p className="tarjeta-genero">{elemento.genero}</p>
        
        <div className="tarjeta-acciones">
          {/* Botón de Favorito con ícono de Corazón */}
          <button 
            className={`boton-favorito ${elemento.favorito ? 'activo' : ''}`} 
            onClick={() => alCambiarFavorito(elemento.id)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" height="14" 
              viewBox="0 0 24 24" 
              /* Esta línea hace que el corazón se rellene si está en favoritos, o quede vacío si no lo está */
              fill={elemento.favorito ? "currentColor" : "none"} 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
              style={{marginRight: '6px'}}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            Favorito
          </button>

          {/* Botón de Detalles con ícono de "i" (Información) */}
          <button 
            className="boton-detalles" 
            onClick={() => alSeleccionar(elemento)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" height="14" 
              viewBox="0 0 24 24" 
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
              style={{marginRight: '6px'}}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;