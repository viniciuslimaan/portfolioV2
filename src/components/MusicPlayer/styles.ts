import styled from 'styled-components';

export const Player = styled.div`
  position: fixed;
  display: flex;
  align-items: center;

  top: calc(50%);
  z-index: 98;
  right: 0;
  transition: 0.5s ease;
  transform: translateY(-50%) translateX(200px);

  &:hover {
    transform: translateY(-50%) translateX(0);

    .showHandlers .icon {
      color: ${(p) => p.theme.colors.primary};
    }
  }

  @media (max-width: 767px) {
    display: none;
  }

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background: ${(p) => p.theme.colors.bgLight};
  }

  .showHandlers,
  .audio {
    border-radius: 10px 0 0 10px;
    border: 1px solid ${(p) => p.theme.colors.bgLight};
    background: ${(props) => props.theme.colors.gradientBg};
  }

  .showHandlers {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;
    color: ${(p) => p.theme.colors.fontLight};

    &:hover .icon {
      color: ${(p) => p.theme.colors.primary};
    }

    .icon {
      font-size: 30px;
      transition: 0.5s ease;
    }
  }

  .audio {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 200px;
    padding: 20px;

    .handlers,
    .volume {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .handlers {
      margin: 15px 0 5px 0;
    }

    .volume {
      input[type='range'] {
        cursor: pointer;
        border-radius: 5px;
        background: ${(p) => p.theme.colors.gradient};
        height: 4px;
      }

      input[type='range'],
      input[type='range']::-webkit-slider-runnable-track,
      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
      }

      input[type='range']::-webkit-slider-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 3px solid ${(p) => p.theme.colors.font};
        background: ${(props) => props.theme.colors.gradient};
      }
    }
  }
`;

export const AudioImage = styled.div`
  width: 160px;
  height: 160px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    user-select: none;
  }
`;

interface ButtonProps {
  disabled?: boolean;
}

export const Button = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  color: ${(p) => (p.disabled ? '#646464' : p.theme.colors.fontLight)};

  &:hover .icon {
    color: ${(p) => (p.disabled ? '#646464' : p.theme.colors.font)};
  }

  .icon {
    font-size: 24px;
    transition: 0.5s ease;
  }

  &.play {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid ${(p) => p.theme.colors.fontLight};
    transition: 0.5s ease;

    .icon {
      font-size: 25px;
    }

    &:hover {
      border: 1px solid ${(p) => p.theme.colors.font};
    }
  }
`;
