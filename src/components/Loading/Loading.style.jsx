import styled from 'styled-components';

export const Warper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  figure {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 6.25em;
    height: 6.25em;
    animation: rotate 2.4s linear infinite;
  }
  .loading--white {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    animation: flash 2.4s linear infinite;
    opacity: 0;
  }
  .loading__dot {
    position: absolute;
    margin: auto;
    width: 2.4em;
    height: 2.4em;
    border-radius: 100%;
    transition: all 1s ease;
  }
  .loading__dot:nth-child(2) {
    top: 0;
    bottom: 0;
    left: 0;
    background: #ff4444;
    animation: dotsY 2.4s linear infinite;
  }
  .loading__dot:nth-child(3) {
    left: 0;
    right: 0;
    top: 0;
    background: #ffbb33;
    animation: dotsX 2.4s linear infinite;
  }
  .loading__dot:nth-child(4) {
    top: 0;
    bottom: 0;
    right: 0;
    background: #99cc00;
    animation: dotsY 2.4s linear infinite;
  }
  .loading__dot:nth-child(5) {
    left: 0;
    right: 0;
    bottom: 0;
    background: #33b5e5;
    animation: dotsX 2.4s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    10% {
      width: 6.25em;
      height: 6.25em;
    }
    66% {
      width: 2.4em;
      height: 2.4em;
    }
    100% {
      transform: rotate(360deg);
      width: 6.25em;
      height: 6.25em;
    }
  }

  @keyframes dotsY {
    66% {
      opacity: 0.1;
      width: 2.4em;
    }
    77% {
      opacity: 1;
      width: 0;
    }
  }
  @keyframes dotsX {
    66% {
      opacity: 0.1;
      height: 2.4em;
    }
    77% {
      opacity: 1;
      height: 0;
    }
  }

  @keyframes flash {
    33% {
      opacity: 0;
      border-radius: 0%;
    }
    55% {
      opacity: 0.6;
      border-radius: 100%;
    }
    66% {
      opacity: 0;
    }
  }
`;
