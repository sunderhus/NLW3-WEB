import styled from 'styled-components';

export const AppSidebar = styled.aside`
  height: 100%;
  position: fixed;
  padding: 3.2rem 2.4rem;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  footer a,
  footer button {
    width: 4.8rem;
    height: 4.8rem;
    outline: none;

    border: 0;

    background: #12afcb;
    border-radius: 1.6rem;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer a:hover,
  footer button:hover {
    background: #17d6eb;
  }

  main {
    flex: 1;
  }
`;
