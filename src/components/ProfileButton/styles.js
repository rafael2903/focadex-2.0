import styled from 'styled-components';

export const Img = styled.img`
  width: 70%;
  height: 70%;
  position: absolute;
  top: 45%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const Div = styled.div`
  p {
    color: white;
    display: inline-block;
  }

  @media (max-width: 530px) {
    p {
      display: none;
    }
  }

  &.image-profile-container {
    background-color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin-left: 15px;
  }

  &.profile-container {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
