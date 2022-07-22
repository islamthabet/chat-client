import styled from 'styled-components';

export const Warper = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eeedf0;
  padding: 0 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

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
