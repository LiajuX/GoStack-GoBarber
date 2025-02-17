import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;

    width: 160px;

    padding: 8px;
    border-radius: 4px;

    background: #ff9000;
    color: #312e38;

    font-size: 14px;
    font-weight: 500;

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    transform: translateX(-50%);

    &::before {
      content: '';

      position: absolute;
      top: 100%;
      left: 50%;

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;

      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
