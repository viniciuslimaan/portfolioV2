import styled from 'styled-components';

export const Player = styled.div`
  position: fixed;
  display: flex;
  align-items: center;

  top: calc(50%);
  z-index: 98;
  right: 0;
  transition: 0.5s ease;
  transform: translateY(-50%) translateX(180px);

  &:hover {
    transform: translateY(-50%) translateX(0);

    .showHandlers .icon {
      color: ${(p) => p.theme.colors.primary};
    }
  }

  @media (max-width: 767px) {
    display: none;
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

    width: 180px;
    padding: 15px;

    .handlers,
    .volume {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .handlers {
      margin: 15px 0 5px 0;
    }

    hr {
      margin: 10px 0 15px 0;
      width: 200px;
      height: 1px;
      border: none;
      background: ${(p) => p.theme.colors.bgLight};
    }

    .volume {
      div {
        width: 30px;
        height: 30px;
        margin-right: 10px;

        .icon {
          font-size: 20px;
        }
      }

      input[type='range'] {
        cursor: pointer;
        border-radius: 5px;
        background: ${(p) => p.theme.colors.gradient};
        height: 3px;
        width: 60%;
      }

      input[type='range'],
      input[type='range']::-webkit-slider-runnable-track,
      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
      }

      input[type='range']::-webkit-slider-thumb {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        border: 3px solid ${(p) => p.theme.colors.font};
        background: ${(props) => props.theme.colors.gradient};
      }
    }
  }
`;

export const AudioImage = styled.div`
  aspect-ratio: 1/1;

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
