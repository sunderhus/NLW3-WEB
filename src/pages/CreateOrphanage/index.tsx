import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';
import { CreateOrphanageForm, Page } from './styles';

const CreateOrphanage: React.FC = () => {
  const [initialPosition] = useState<Coordinates>({
    latitude: -30.008902625,
    longitude: -51.150933749,
  } as Coordinates);

  const [urlTile] = useState<string>(
    () =>
      `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
  );
  return (
    <Page>
      <Sidebar />

      <main>
        <CreateOrphanageForm>
          <fieldset>
            <legend>Dados</legend>

            <MapContainer
              center={[initialPosition.latitude, initialPosition.longitude]}
              zoom={15}
              scrollWheelZoom={false}
              style={{ minHeight: '280px', height: '100%', width: '100%' }}
            >
              <TileLayer url={urlTile} />

              <Marker
                icon={mapIcon}
                position={[initialPosition.latitude, initialPosition.longitude]}
              ></Marker>
            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          {/* <PrimaryButton type="submit">Confirmar</PrimaryButton> */}
        </CreateOrphanageForm>
      </main>
    </Page>
  );
};
export default CreateOrphanage;
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
