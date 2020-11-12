import React, { useEffect, useState } from 'react';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import mapIcon from '../../utils/mapIcon';
import { Page } from './styles';

interface OrphanageParams {
  id: string;
}
interface OrphanageImage {
  id: number;
  imagePath: string;
}
interface OrphanageDetail {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: OrphanageImage[];
}

const Orphanage: React.FC = () => {
  const params = useParams<OrphanageParams>();

  const [urlTile] = useState<string>(
    () =>
      `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [orphanage, setOrphanage] = useState<OrphanageDetail>();

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(({ data }) => {
      setOrphanage(data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Page>
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img
            src={orphanage.images[activeImageIndex].imagePath}
            alt={orphanage.name}
          />

          <div className="images">
            {orphanage.images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  className={`${activeImageIndex === index && 'active'}`}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image.imagePath} alt={orphanage.name} />
                </button>
              );
            })}
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map
                scrollWheelZoom={false}
                dragging={false}
                zoomControl={false}
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
              >
                <TileLayer url={urlTile} />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noreferrer noopener "
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude}${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="closed-on-weekends">
                  <FiInfo size={32} color="#ff669d" />
                  Não Atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            {/* <PrimaryButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </PrimaryButton> */}
          </div>
        </div>
      </main>
    </Page>
  );
};
export default Orphanage;
