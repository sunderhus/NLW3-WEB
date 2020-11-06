import styled, { css } from 'styled-components';

import kids from '../../assets/images/kids.svg';

export const Page = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1110px;
  height: 100%;
  max-height: 680px;

  display: grid;
  justify-content: space-between;
  grid-gap: 3rem;

  ${() => css`
    background: url(${kids}) 80% center no-repeat;
  `}

  main {
    max-width: 35rem;
    h1 {
      font-size: 7.6rem;
      font-weight: 900;
      line-height: 7rem;
    }
    p {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 3.4rem;
    }
  }

  .location {
    position: absolute;
    right: 0px;
    top: 0px;

    font-size: 2.4rem;
    line-height: 3.4rem;

    display: flex;
    flex-direction: column;
    text-align: right;
    strong {
      font-weight: 800;
    }
  }

  .enter-app {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 8rem;
    height: 8rem;
    background: #ffd666;
    border-radius: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s linear;
    :hover {
      background: #96feff;
    }
  }
`;
