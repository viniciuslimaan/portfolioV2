import styled from 'styled-components';

export const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

interface CardProps {
  selected: boolean;
}

export const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 150px;
  height: 150px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  transition: color 0.5s ease;
  border: 1px solid ${(p) => p.theme.colors.bgLight};
  background: ${(p) => p.theme.colors.gradientBg};

  &:hover .icon,
  &:hover p {
    color: ${(p) => p.theme.colors.secondary} !important;
  }

  .icon,
  p {
    transition: color 0.5s ease;
  }

  .icon {
    font-size: 2.8rem;
    color: ${(p) =>
      p.selected ? p.theme.colors.primary : p.theme.colors.font};
  }

  p {
    font-weight: 600;
    margin-top: 12px;
    font-size: 1rem;
    color: ${(p) =>
      p.selected ? p.theme.colors.primary : p.theme.colors.fontLight};
  }
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

export const BtnNew = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  padding: 13px 35px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  width: 260px;
  max-width: 100%;
  background: ${(p) => p.theme.colors.success};
  color: ${(p) => p.theme.colors.font};
  transition: filter 0.5s ease;

  @media (max-width: 767px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(0.9);
  }

  .icon {
    font-size: 1.8rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  overflow-x: auto;
  color: ${(p) => p.theme.colors.font};

  thead tr {
    border: 1px solid ${(p) => p.theme.colors.bgLight};
    background: ${(p) => p.theme.colors.secondary};
    color: ${(p) => p.theme.colors.font};
    font-weight: 800;
  }

  tr {
    background: ${(p) => p.theme.colors.font};
    color: ${(p) => p.theme.colors.bg};
  }

  tr:nth-child(even) {
    background: #ececec;
  }

  td {
    padding: 10px;
  }
`;

export const Funcions = styled.div`
  display: flex;
  gap: 5px;
`;

interface BtnFunctions {
  type: 'edit' | 'del';
}

export const BtnFuctions = styled.button<BtnFunctions>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s ease;
  color: ${(p) => p.theme.colors.font};
  background: ${(p) =>
    p.type === 'edit' ? p.theme.colors.warning : p.theme.colors.error};

  &:hover {
    filter: brightness(0.9);
  }

  .icon {
    font-size: 1.2rem;
  }
`;
