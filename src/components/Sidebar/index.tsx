import React from 'react';

import { AppSidebar } from './styles';

import mapMarker from '../../assets/images/marker.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <AppSidebar>
      <img src={mapMarker} alt="Happy marker" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </AppSidebar>
  );
};

export default Sidebar;
