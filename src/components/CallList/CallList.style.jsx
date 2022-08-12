import styled from 'styled-components';

export const Warper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  height: calc(100vh - 110px - 10px - 42px);
  .call__card {
    transition: all ease-in-out 450ms;
    display: flex;
    align-items: center;
    padding: 1rem 0.5rem;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    flex-wrap: nowrap;
    &__img {
      width: 45px;
      height: 45px;
      object-fit: cover;
      border-radius: 50%;
      flex-shrink: 0;
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: start;
      width: 150px;
      margin-left: 0.5rem;

      &--name {
        transition: all ease-in-out 450ms;
        color: ${(props) => () => props.isActive ? '#fff' : '#30333d'};
        font-size: 0.9rem;
        margin-bottom: 0.25rem;
      }
    }
    &__times {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &--date {
        transition: all ease-in-out 450ms;
        color: ${(props) => () => props.isActive ? '#ddd' : '#5856b1'};
        margin-bottom: 0.25rem;
      }
    }
  }
`;
