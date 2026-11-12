import './tarjeta.css';

function Tarjeta({ elemento, alCambiarFavorito, alSeleccionar }) {
  return (
    <div className="tarjeta-pelicula">
      <div className="tarjeta-imagen-contenedor" onClick={() => alSeleccionar(elemento)}>
        <img 
          src={elemento.imagen} 
          alt={elemento.titulo} 
          className="tarjeta-imagen"
        />
      </div>

      <div className="tarjeta-info">
        <h3 className="tarjeta-titulo">{elemento.titulo}</h3>
        <p className="tarjeta-genero">{elemento.genero}</p>

        <div className="tarjeta-acciones">
          <button 
            className={`boton-favorito ${elemento.favorito ? 'activo' : ''}`}
            onClick={() => alCambiarFavorito(elemento.id)}
          >
            {elemento.favorito ? '❤️ En Favoritos' : '🤍 Añadir a Favoritos'}
          </button>
          
          <button 
            className="boton-detalles"
            onClick={() => alSeleccionar(elemento)}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;