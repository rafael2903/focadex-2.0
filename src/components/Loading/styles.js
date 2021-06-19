import styled from 'styled-components';

export const Loading = styled.p`
  text-align: center;
  border-radius: 100%;
  position: relative;
  height: 100vh;
  width: 100%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 100%;
    border: 4px solid transparent;
    border-top-color: #167ef9;
  }

  &:before {
    z-index: 100;
    animation: spin 1s infinite;
  }

  &:after {
    border: 4px solid #ccc;
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: translateX(-50%) rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: translateX(-50%) rotate(360deg);
    }
  }
`;
