import styled from 'styled-components';

export const Warper = styled.div`
  height: 60px;
  padding: 0 1rem;
  background-color: #f9fbfc;
  display: flex;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
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

  .place-holder-message {
    position: absolute;
    left: 2rem;
    user-select: none;
    z-index: 0;
    color: #717179;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
  }
  .chat__input {
    z-index: 1;
    border: none;
    height: 100%;
    max-height: 400px;
    padding: 1.25rem 1rem;
    width: 100%;
    max-width: calc(100vw - 600px - 2rem - 6rem - 1.15rem);
    resize: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    overflow: auto;

    :focus {
      outline: none;
    }
    .placeholder {
      color: #8d8d8d;
    }

    /* font-family: 'Smooch', cursive; */
    :focus-visible {
      outline: none;
    }
  }
  em-emoji-picker {
    position: absolute;
    bottom: 60px;
    right: 1rem;
    z-index: 1000;
  }

  button {
    background: linear-gradient(
      90deg,
      rgba(116, 66, 233, 1) 0%,
      rgba(152, 59, 240, 1) 50%,
      rgba(180, 53, 244, 1) 100%
    );
    border: none;
    margin-left: 1rem;
    :enabled:hover,
    :enabled:active {
      background: linear-gradient(
        90deg,
        rgba(116, 66, 233, 1) 0%,
        rgba(152, 59, 240, 1) 50%,
        rgba(180, 53, 244, 1) 100%
      );
      border: none;
      outline: none;
    }
    :focus {
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px rgba(180, 53, 244, 1), 0 1px 2px 0 black;
    }
  }
`;
