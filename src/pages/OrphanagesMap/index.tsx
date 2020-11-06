import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import happyMarker from '../../assets/images/marker.svg';

import 'leaflet/dist/leaflet.css';

import { Page } from './styles';
const OrphanagesMap: React.FC = () => {
  return (
    <Page>
      <aside>
        <header>
          <img src={happyMarker} alt="happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita.</p>
        </header>
        <footer>
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>
      <MapContainer
        center={[-30.0091949, -51.1508648]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {/* {<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> } */}
      </MapContainer>
      <Link to="/map" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Page>
  );
};

export default OrphanagesMap;
