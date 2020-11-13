import { LeafletMouseEvent } from 'leaflet';
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import PrimaryButton from '../../components/PrimaryButton';
import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';
import { CreateOrphanageForm, Page } from './styles';

const CreateOrphanage: React.FC = () => {
  const [deviceCurrentPosition, setDeviceCurrentPosition] = useState<
    Coordinates
  >({
    latitude: 0,
    longitude: 0,
  } as Coordinates);

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [urlTile] = useState<string>(
    () =>
      `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
  );

  const handleMapClick = useCallback(({ latlng }: LeafletMouseEvent) => {
    console.log(latlng);
    const { lat, lng } = latlng;

    setPosition({ latitude: lat, longitude: lng });
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setDeviceCurrentPosition(coords);
      });
  }, []);

  return (
    <Page>
      <Sidebar />

      <main>
        <CreateOrphanageForm onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[
                deviceCurrentPosition.latitude,
                deviceCurrentPosition.longitude,
              ]}
              zoom={16}
              scrollWheelZoom={false}
              zoomControl={true}
              style={{ minHeight: '280px', height: '100%', width: '100%' }}
              onclick={(e) => handleMapClick(e)}
            >
              <TileLayer url={urlTile} />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                ></Marker>
              )}
            </Map>

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

          <PrimaryButton type="submit">Confirmar</PrimaryButton>
        </CreateOrphanageForm>
      </main>
    </Page>
  );
};
export default CreateOrphanage;
