import {InputText} from 'primereact/inputtext';
import styled from 'styled-components';

export const Warper = styled.div`
  animation: slideFromLeft 500ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

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
      box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px rgba(180, 53, 244, 1),
        0 1px 2px 0 black;
    }
  }

  @keyframes slideFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const RoundInput = styled(InputText)`
  border-radius: 50px;
  width: 100%;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  ::placeholder {
    color: #a5acb5;
  }
`;
