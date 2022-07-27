import styled from 'styled-components';

export const Warper = styled.div`
  position: absolute;
  right: 0rem;
  bottom: 0rem;
  transform: translateY(100%);
  transition: all ease-in-out 250ms;
  transform-origin: center top;
  visibility: ${(props) => (props.showMenu ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.showMenu ? 1 : 0)};
  section {
    background-color: #fff;
    padding: 1.25rem;
    border: 0 none;
    border-radius: 6px;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    text-transform: capitalize;
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  }
  div {
    cursor: pointer;
  }
`;
