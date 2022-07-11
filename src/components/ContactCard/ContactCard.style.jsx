import styled from 'styled-components';

export const Warper = styled.div`
  transition: all ease-in-out 450ms;
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  flex-wrap: nowrap;
  background-color: ${(props) => () => props.isActive ? '#30333d' : ''};
  cursor: pointer;

  .contact__card {
    &__img {
      width: 45px;
      height: 45px;
      object-fit: cover;
      border-radius: 50%;
      flex-shrink: 0;
    }
    &__status {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      bottom: 1rem;
      left: 2.75rem;

      &--active {
        background-color: #09d809;
      }
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
      &--message {
        transition: all ease-in-out 450ms;
        color: ${(props) => () => props.isActive ? '#ddd' : '#8d8d8d'};
        font-size: 0.85rem;
        text-align: left;
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
      &--notification {
        color: #fff;
        font-size: 0.75rem;
        border-radius: 50%;
        padding: 0.35rem 0.75rem;
        background: var(--mainBackground);
        background: var(--mainGradientBackground);
      }
    }
  }
`;
