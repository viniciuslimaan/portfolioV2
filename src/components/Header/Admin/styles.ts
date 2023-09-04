import styled from 'styled-components';

export const Account = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 1.5rem;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const NameAccount = styled.h2`
  font-size: 1.6rem;
  word-break: break-all;

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ButtonsAccount = styled.div`
  display: flex;
  gap: 5px;
`;

export const Line = styled.hr`
  height: 1px;
  border-color: ${(props) => props.theme.colors.bgLight};
  width: 100%;
  margin: 1rem auto;
  opacity: 0.3;
`;
