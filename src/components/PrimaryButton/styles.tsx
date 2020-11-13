import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  margin-top: 6.4rem;
  width: 100%;
  height: 6.4rem;
  border: 0;
  background: #37c77f;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  line-height: 2.6rem;
  font-size: 1.8rem;
  outline: none;
  &:hover {
    background: #36cf82;
  }

  svg {
    margin-right: 1.6rem;
  }
`;
