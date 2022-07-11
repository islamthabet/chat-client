import {Button} from 'primereact/button';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .suggesting__meta {
    display: flex;
  }
  .suggesting__image {
    width: 38px;
    height: 38px;
    object-fit: cover;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .suggesting__titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 0.5rem;
  }
  .suggesting__name {
    color: #5750e4;
    text-transform: capitalize;
    font-weight: 700;
  }
  .suggesting__info {
    font-size: 0.9rem;
    color: #8d8d8d;
  }
`;

export const RoundButton = styled(Button)`
  background: linear-gradient(
    90deg,
    rgba(116, 66, 233, 1) 0%,
    rgba(152, 59, 240, 1) 50%,
    rgba(180, 53, 244, 1) 100%
  );
  border-radius: 20px;
  height: 2.25rem;
  width: 65px;
  border: none;
  margin-right: 1rem;
  :enabled:active {
    background: linear-gradient(
      90deg,
      rgba(116, 66, 233, 1) 0%,
      rgba(152, 59, 240, 1) 50%,
      rgba(180, 53, 244, 1) 100%
    );
    border: none;
  }
  :enabled:hover {
    background: linear-gradient(
      90deg,
      rgba(116, 66, 233, 1) 0%,
      rgba(152, 59, 240, 1) 50%,
      rgba(180, 53, 244, 1) 100%
    );
    border: none;
  }
  :focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px rgba(180, 53, 244, 1),
      0 1px 2px 0 black;
  }
`;
