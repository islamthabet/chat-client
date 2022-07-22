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

  .dialogue__content {
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &__title {
      color: #8e8e8e;
      font-size: 1.25rem;
      margin-bottom: 1rem;
      padding-bottom: 0.25rem;
      border-bottom: 1px #8e8e8e solid;
    }
    &__buttons {
      margin-top: 1rem;
      display: flex;
      justify-content: end;
      gap: 1rem;
      align-items: center;
      button {
        height: 30px;
      }
    }
  }
`;
