import styled from 'styled-components';

export const ProfileIconBtn = styled.div`
  position: relative;
  display: flex;
  width: 68px;
  height: 68px;

  svg {
    display: block;
  }

  .edit-profile-icon {
    fill: ${p => p.theme.colors.btnSmall};
    border-radius: 8px;
    height: 100%;
    width: 100%;
  }

  .burger-icon-plus {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 6px;
    background-color: ${p => p.theme.colors.btnPlus};
    padding: 7px;
    stroke: ${p => p.theme.colors.black};
  }
`;
