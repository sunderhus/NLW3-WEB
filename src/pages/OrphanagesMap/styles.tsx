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
  .map-popup {
    .leaflet-popup-tip-container {
      display: none;
    }
    .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 2rem;
      box-shadow: none;
    }
    .leaflet-popup-content {
      color: #0089a5;
      font-size: 2rem;
      font-weight: bold;
      margin: 0.8rem 1.2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        width: 4rem;
        height: 4rem;
        background: #15c3d6;
        box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
        border-radius: 1.2rem;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .leaflet-control-attribution a {
    display: none;
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
