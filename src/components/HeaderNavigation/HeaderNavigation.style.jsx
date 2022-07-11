import styled from 'styled-components';

export const Warper = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eeedf0;
  padding: 0 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  .profile__dropdown {
    position: relative;
    :hover .profile__dropdown__hidden-menu {
      visibility: visible;
      opacity: 1;
      transform: translate(-80%, 0);
    }
    &__hidden-menu {
      position: absolute;
      padding: 0 0.5rem;
      transition: all ease-in-out 450ms;
      transform-origin: top;
      visibility: hidden;
      opacity: 0;
      transform: translate(-80%, -10px);
      z-index: 1000;
      ::before {
        content: '';
      }
    }
  }
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  svg {
    font-size: 1.5rem;
    color: #a5acb5;
    cursor: pointer;
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
`;
