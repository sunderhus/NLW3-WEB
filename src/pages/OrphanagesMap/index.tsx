import React from 'react';

import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import happyMarker from '../../assets/images/marker.svg';

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
      <div>mapa virá aqui..</div>

      <Link to="/map" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Page>
  );
};

export default OrphanagesMap;
