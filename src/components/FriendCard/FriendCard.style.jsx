import styled from 'styled-components';

export const Warper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  flex-wrap: nowrap;
  .request__card__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    &__name {
      color: #30333d;
      font-size: 1.25rem;
    }
    &__email {
      color: #9d9d9d;
      font-size: 0.9rem;
    }
  }

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px;
    flex-shrink: 0;
  }
`;
