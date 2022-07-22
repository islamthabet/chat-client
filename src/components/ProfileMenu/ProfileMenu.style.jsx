import styled from 'styled-components';

export const Warper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  img {
    display: block;
    margin: 1rem auto;
    width: 80px;
    height: 80px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .profile__info {
    display: flex;
    flex-direction: column;
    text-align: center;
    &__name {
      color: #222;
      font-size: 1rem;
    }
    &__email {
      color: #222;
      font-size: 0.9rem;
    }
  }
  div {
    border-bottom: 1px solid #9d9d9d9d;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.35rem;
    color: #a5acb5;
    cursor: pointer;
    height: 48px;
    text-align: center;
    :hover {
      color: rgba(180, 53, 244, 1);
      background-color: #f7f8f8;
      svg {
        stroke: url(#coll-gradient);
        color: rgba(180, 53, 244, 1);
      }
    }
    :active {
      background-color: rgba(95, 99, 104, 0.1);
    }
    :last-of-type {
      border: none;
      :hover {
        color: #d31919;
        svg {
          color: #d31919;
        }
      }
    }
  }
`;

export const DialogueWarper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;

  input,
  .p-password,
  .p-float-label,
  .p-calendar,
  .p-dropdown {
    width: 100%;
  }

  .profile__form__submit {
    grid-column: 1 / 3;
  }
`;
