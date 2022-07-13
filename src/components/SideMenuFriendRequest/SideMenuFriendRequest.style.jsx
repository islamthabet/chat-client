import styled from 'styled-components';

export const Warper = styled.div`
  animation: slideFromLeft 500ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
