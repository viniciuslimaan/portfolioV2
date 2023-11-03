import styled from 'styled-components';

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  justify-items: center;
  grid-gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  margin-bottom: 2.5rem;
  color: #fff;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  outline: 0;
  border: none;
  cursor: pointer;
  user-select: none;
  color: ${(p) => p.theme.colors.fontLight};
  background: none;
  transition: 0.5s ease;

  &.selected {
    color: ${(p) => p.theme.colors.primary};
  }

  &:hover {
    color: ${(p) => p.theme.colors.secondary};
  }
`;

export const LinkGit = styled.p`
  text-align: center;
  margin-top: 3rem;
`;
