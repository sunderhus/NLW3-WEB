import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;

  aside {
    width: 44rem;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 8rem;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h2 {
      font-size: 4rem;
      font-weight: 800;
      line-height: 4.2rem;
      margin-top: 6.4rem;
    }
    p {
      line-height: 2.8rem;
      margin-top: 2.4rem;
    }

    footer {
      display: flex;
      flex-direction: column;
      font-size: 1.8rem;
      line-height: 2.4rem;
      strong {
        font-weight: 800;
      }
    }
  }

  .leaflet-container {
    z-index: 5;
  }

  .create-orphanage {
    position: absolute;
    right: 4rem;
    bottom: 4rem;

    width: 6.4rem;
    height: 6.4rem;
    background: #14c3d1;
    border-radius: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;

    z-index: 10;
    &:hover {
      background: #17d6eb;
    }
  }
`;
