import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import happyMarker from '../../assets/images/marker.svg';
import { Page } from './styles';
import Leaflet from 'leaflet';
import { FaArrowRight } from 'react-icons/fa';

const OrphanagesMap: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<Coordinates>({
    latitude: -30.008902625,
    longitude: -51.150933749,
  } as Coordinates);
  const [urlTile] = useState<string>(
    () =>
      `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
  );
  const mapIcon = Leaflet.icon({
    iconUrl: happyMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(({ coords }) =>
        setInitialPosition(coords)
      );
  }, []);

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
        center={[initialPosition.latitude, initialPosition.longitude]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url={urlTile} />
        {/* {<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> } */}

        <Marker
          icon={mapIcon}
          position={[initialPosition.latitude, initialPosition.longitude]}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar dos Gulis
            <Link to="/orphanage">
              <FaArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </MapContainer>
      <Link to="/map" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Page>
  );
};

export default OrphanagesMap;
