import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  .notification__info {
    margin-left: 0.5rem;
  }
  .notification__image {
    width: 38px;
    height: 38px;
    object-fit: cover;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .notification__name {
    color: #5750e4;
    text-transform: capitalize;
    font-weight: 600;
  }
  .notification__time {
    font-size: 0.9rem;
    color: #8d8d8d;
  }
`;
