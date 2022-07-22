import styled from 'styled-components';

export const Warper = styled.div`
  width: 100%;
  height: calc(100vh - 110px - 60px);
  overflow: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  text-align: ${(props) => (props.sended ? 'right' : 'left')};
  padding: 0.5rem 0;
  span {
    background: ${(props) =>
      props.sended
        ? '#e9eff4'
        : 'linear-gradient( 90deg, rgba(116,66,233,1) 0%, rgba(152,59,240,1) 50%, rgba(180,53,244,1) 100% );'};
    color: ${(props) => (props.sended ? '#30333d' : '#fff')};
    padding: 0.5rem 2rem;

    border-radius: ${(props) => (props.sended ? '0 25px 0 25px' : '25px 0 25px 0')};
  }
`;
