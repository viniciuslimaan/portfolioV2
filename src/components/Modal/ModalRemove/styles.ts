import styled from 'styled-components';

export const ModalHeader = styled.div`
  padding: 1.5rem;
`;

export const ModalClose = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0.5rem;
  right: 0.5rem;
  width: 40px;
  height: 40px;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s ease;
  color: ${(p) => p.theme.colors.font};
  border: 1px solid ${(p) => p.theme.colors.bgLight};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
    background: ${(p) => p.theme.colors.bg};
  }
`;

export const ModalContent = styled.div`
  padding: 0rem 1.5rem 1rem 1.5rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  @media (max-width: 350px) {
    flex-wrap: wrap;
  }

  padding: 1.5rem;
`;
