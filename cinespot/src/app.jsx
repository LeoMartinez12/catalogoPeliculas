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
        <h1>CineSpot</h1>
        
        {/* Requisito: Buscar contenido por título */}
        <input 
          type="text" 
          className="barra-busqueda"
          placeholder="Buscar películas o series..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        
        {/* Requisito: Filtrar por tipo y sección de favoritos */}
        <div className="filtros">
           <button className={filtroTipo === 'Todas' ? 'activo' : ''} onClick={() => { setFiltroTipo('Todas'); setVerSoloFavoritos(false); }}>Todas</button>
           <button className={filtroTipo === 'Películas' ? 'activo' : ''} onClick={() => { setFiltroTipo('Películas'); setVerSoloFavoritos(false); }}>Películas</button>
           <button className={filtroTipo === 'Series' ? 'activo' : ''} onClick={() => { setFiltroTipo('Series'); setVerSoloFavoritos(false); }}>Series</button>
           <button className={verSoloFavoritos ? 'activo' : ''} onClick={() => setVerSoloFavoritos(true)}>Mis Favoritos</button>
        </div>
      </header>

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