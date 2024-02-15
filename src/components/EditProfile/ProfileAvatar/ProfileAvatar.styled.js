import styled from 'styled-components';

export const ProfileIconBtn = styled.div`
  position: relative;
  display: flex;
  width: 68px;
  height: 68px;
  transition: all ${p => p.theme.cubicTransition};

  svg {
    display: block;
  }

  .edit-profile-icon {
    transition: all ${p => p.theme.cubicTransition};
    fill: ${p => p.theme.colors.AvatarBackgroundColor};
    border-radius: 8px;
    height: 100%;
    width: 100%;
  }

  .burger-icon-plus {
    transition: all ${p => p.theme.cubicTransition};
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 6px;
    background-color: ${p => p.theme.colors.AvatarBackgroundColor};
    padding: 7px;
    stroke: ${p => p.theme.colors.PlusBackgroundColor};
  }

  &:hover {
    .edit-profile-icon {
      fill: ${p => p.theme.colors.secondAccentColor};
    }

    .burger-icon-plus {
      background-color: ${p => p.theme.colors.secondAccentColor};
    }
  }
`;
