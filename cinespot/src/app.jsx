import { useState } from 'react';
import { catalogoInicial } from './datos';
import Tarjeta from './components/tarjeta';
import './app.css'; 

function App() {
  // Estados para manejar la información dinámica
  const [catalogo, setCatalogo] = useState(catalogoInicial);
  const [busqueda, setBusqueda] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('Todas');
  const [verSoloFavoritos, setVerSoloFavoritos] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null); // Para mostrar los detalles

  // Función para marcar/desmarcar favoritos
  const alternarFavorito = (id) => {
    const nuevoCatalogo = catalogo.map(item => 
      item.id === id ? { ...item, favorito: !item.favorito } : item
    );
    setCatalogo(nuevoCatalogo);
  };

  // Lógica combinada: Búsqueda por título + Filtro por tipo + Sección de favoritos
  const contenidoFiltrado = catalogo.filter(item => {
    const coincideBusqueda = item.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideTipo = filtroTipo === 'Todas' || item.tipo === filtroTipo;
    const coincideFavorito = verSoloFavoritos ? item.favorito : true;
    
    return coincideBusqueda && coincideTipo && coincideFavorito;
  });

  return (
    <div className="app-contenedor">
      <header className="cabecera">
        <h1>CINESPOT</h1>
        <h2 className="eslogan">Busca tu pelicula favorita</h2>
        
        {/* Requisito: Contenedor de búsqueda con el ícono de lupa */}
        <div className="contenedor-busqueda">
          <svg className="icono-lupa" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            className="barra-busqueda"
            placeholder="Buscar películas o series..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        
        {/* Requisito: Filtrar por tipo y sección de favoritos (Textos adaptados al diseño) */}
        <div className="filtros">
           <button className={filtroTipo === 'Todas' ? 'activo' : ''} onClick={() => { setFiltroTipo('Todas'); setVerSoloFavoritos(false); }}>Todas</button>
           <button className={filtroTipo === 'Películas' ? 'activo' : ''} onClick={() => { setFiltroTipo('Películas'); setVerSoloFavoritos(false); }}>Peliculas</button>
           <button className={filtroTipo === 'Series' ? 'activo' : ''} onClick={() => { setFiltroTipo('Series'); setVerSoloFavoritos(false); }}>Series</button>
           <button className={verSoloFavoritos ? 'activo' : ''} onClick={() => setVerSoloFavoritos(true)}>Favoritos</button>
        </div>
      </header>

      {/* Título de sección de la cuadricula */}
      <div className="encabezado-grilla">
        <h3>En tendencia</h3>
      </div>

      {/* Requisito: Mostrar catálogo */}
      <main className="grilla-contenido">
        {contenidoFiltrado.length > 0 ? (
          contenidoFiltrado.map(item => (
            <Tarjeta 
              key={item.id} 
              elemento={item} 
              alCambiarFavorito={alternarFavorito}
              alSeleccionar={setSeleccionado}
            />
          ))
        ) : (
          <p className="mensaje-vacio">No se encontró contenido.</p>
        )}
      </main>

      {/* Requisito: Consultar información detallada */}
      {seleccionado && (
        <div className="modal-fondo">
          <div className="modal-contenido">
            <h2>{seleccionado.titulo} ({seleccionado.año})</h2>
            <p><strong>Género:</strong> {seleccionado.genero}</p>
            <p><strong>Sinopsis:</strong> {seleccionado.sinopsis}</p>
            <button className="boton-cerrar" onClick={() => setSeleccionado(null)}>Cerrar detalles</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;