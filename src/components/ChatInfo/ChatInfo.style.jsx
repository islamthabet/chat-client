import styled from 'styled-components';

export const Warper = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  border: 1px solid #eeedf0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  .chat- {
    &info {
      display: flex;
      align-items: center;
      height: 100%;
      &__image {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        object-fit: cover;
      }
      &__titles {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 1rem;
        &--main {
          font-size: 1rem;
        }
        &--sub {
          font-size: 0.9rem;
          color: #8d8d8d;
        }
      }
    }
    &icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        font-size: 1.5rem;
        color: #a5acb5;
        cursor: pointer;
        margin-left: 1.25rem;
        transition: all ease-in-out 250ms;
        transform-origin: left;
        &.active {
          stroke: url(#coll-gradient);
          color: rgba(180, 53, 244, 1);
        }
        :hover {
          stroke: url(#coll-gradient);
          color: rgba(180, 53, 244, 1);
        }
      }
    }
  }
`;
