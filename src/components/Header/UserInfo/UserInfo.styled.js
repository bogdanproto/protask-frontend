const { default: styled } = require('styled-components');

export const HeaderAvatar = styled.div`
  display: flex;
  align-items: center;

  /* border-radius: 6px; */

  button {
    height: 32px;
    width: 32px;
    margin-left: 8px;

    padding: 0;
    border: none;
  }
  .edit-profile-icon {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  svg {
    fill: ${p => p.theme.colors.AvatarBackgroundColor};
    transition: all ${p => p.theme.cubicTransition};

    &:hover {
      fill: ${p => p.theme.colors.secondAccentColor};
    }
  }
`;
