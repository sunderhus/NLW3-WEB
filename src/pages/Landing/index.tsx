import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Wrapper, Page } from './styles';

import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <Page>
      <Wrapper>
        <img src={logo} alt="Happy Logo" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </div>

        <Link to="/map" className="enter-app">
          <FaArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </Wrapper>
    </Page>
  );
};

export default Landing;
