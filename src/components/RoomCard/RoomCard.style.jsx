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

  .room__card {
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
      &--members {
        transition: all ease-in-out 450ms;
        color: ${(props) => () => props.isActive ? '#ddd' : '#8d8d8d'};
        font-size: 0.85rem;
        text-align: left;
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
        text-transform: capitalize;
        span {
          position: relative;
          :not(:last-of-type) {
            ::before {
              content: '&';
              position: absolute;
              right: -0.75rem;
            }
          }
        }
      }
    }
  }
`;
