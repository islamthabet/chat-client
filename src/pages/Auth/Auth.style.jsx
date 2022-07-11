import styled from 'styled-components';
import backgroundImg from '../../assets/backgorund.jpg';

export const Warper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImg});
  background-position: left;
  background-size: cover;
`;

export const Content = styled.div`
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.25);
  padding: 1.25rem;
  border-radius: 12px;
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  margin: 1rem 0;
  color: var(--primary-color-text);
`;

export const Form = styled.form`
  gap: 1rem 0;
  padding: 1rem 0;
  .p-float-label > label {
    color: #222;
  }
`;
