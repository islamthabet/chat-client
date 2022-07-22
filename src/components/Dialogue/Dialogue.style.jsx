import styled from 'styled-components';

export const Warper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  .closeBtn {
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-size: 2rem;
    color: #fff;
  }
  .dialogue__content {
    background-color: #fff;
    border-radius: 20px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    &__title {
      font-size: 2.5rem;
      color: #8e8e8e;
      font-family: 'Smooch', cursive;
      border-bottom: 1px solid #8e8e8e;
    }
  }
`;
