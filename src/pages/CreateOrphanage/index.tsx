import { LeafletMouseEvent } from 'leaflet';
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import mapIcon from '../../utils/mapIcon';
import { CreateOrphanageForm, Page } from './styles';

interface ICreateOrphanageFormProps {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: File[];
}

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [deviceCurrentPosition, setDeviceCurrentPosition] = useState<
    Coordinates
  >({
    latitude: 0,
    longitude: 0,
  } as Coordinates);
  const [openOnWeekends, setOpenOnWeekends] = useState(true);
  const [form, setForm] = useState<ICreateOrphanageFormProps>({
    open_on_weekends: true,
  } as ICreateOrphanageFormProps);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [urlTile] = useState<string>(
    () =>
      `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
  );
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const navigateToMapPage = useCallback(() => history.push('/map'), [history]);

  const handleOpenOnWeekends = useCallback(
    (openFlag: boolean) => {
      setOpenOnWeekends(openFlag);
      setForm({ ...form, open_on_weekends: openFlag });
    },
    [form]
  );

  const handleMapClick = useCallback(
    ({ latlng }: LeafletMouseEvent) => {
      const { lat, lng } = latlng;

      setPosition({ latitude: lat, longitude: lng });

      setForm({
        ...form,
        latitude: lat,
        longitude: lng,
      });
    },
    [form]
  );

  useMemo(() => {
    const previews = images.map((image) => window.URL.createObjectURL(image));
    setPreviewImages((previewImages) => [...previewImages, ...previews]);
  }, [images]);

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }
      const { files } = event.target;
      setImages(Array.from(files));
    },
    []
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;

      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        const data = new FormData();
        data.append('name', form.name);
        data.append('about', form.about);
        data.append('latitude', String(form.latitude));
        data.append('longitude', String(form.longitude));
        data.append('instructions', form.instructions);
        data.append('opening_hours', form.opening_hours);
        data.append('open_on_weekends', String(form.open_on_weekends));

        images.map((image) => data.append('images', image));

        await api.post('orphanages', data);
        alert('orfanato cadastrado com sucesso.');
        navigateToMapPage();
      } catch (e) {
        console.log(e);
        alert('Revise os dados usados e tente novamente');
      }
    },
    [form, navigateToMapPage, images]
  );

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
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" onChange={handleInputChange} />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="about"
                name="about"
                onChange={handleInputChange}
                maxLength={300}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>
              <input
                multiple
                type="file"
                name="images"
                id="images"
                onChange={handleSelectImages}
              />

              <div className="uploaded-image"></div>
              <div className="images-container">
                {previewImages.map((preview, index) => {
                  return (
                    <img
                      key={index}
                      src={preview}
                      className="new-image"
                      alt="nova imagem"
                    />
                  );
                })}

                <label className="new-image" htmlFor="images">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                name="instructions"
                onChange={handleInputChange}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário das visitas</label>
              <input
                id="opening_hours"
                name="opening_hours"
                onChange={handleInputChange}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  onClick={() => handleOpenOnWeekends(true)}
                  className={`${openOnWeekends && 'active'}`}
                >
                  Sim
                </button>
                <button
                  onClick={() => handleOpenOnWeekends(false)}
                  type="button"
                  className={`${!openOnWeekends && 'active'}`}
                >
                  Não
                </button>
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
