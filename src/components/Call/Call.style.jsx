import styled from 'styled-components';

export const Warper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 1rem auto;
    display: block;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: center;
  }

  .call {
    &__card {
      background-color: #fff;
      border-radius: 10px;
      padding: 1rem 2rem;
      &__title {
        text-transform: capitalize;
        font-size: 1.25rem;
      }
    }
  }
`;
