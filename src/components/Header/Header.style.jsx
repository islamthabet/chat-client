import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;

  nav {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    box-shadow: rgb(17 17 26 / 10%) 0px 2px 5px;
    display: flex;
    align-items: center;

    ul {
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        h2 {
          cursor: pointer;
          font-family: 'Smooch', cursive;
          font-size: 2.5rem;
          font-weight: 500;
          background: -webkit-linear-gradient(
            90deg,
            rgba(116, 66, 233, 1) 0%,
            rgba(152, 59, 240, 1) 50%,
            rgba(180, 53, 244, 1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        h4 {
          color: #d8d8d8;
          text-transform: capitalize;
          font-size: 1.1rem;
          font-weight: 400;
        }
      }
    }
  }
`;
