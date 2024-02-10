import { PlusIcon } from '../../common/IconsLibrary/index';
import { CardBtnStyled, IconContainer } from './CardBtn.styled';

export const CardBtn = ({ action, disabled }) => {
  return (
    <CardBtnStyled type="submit" disabled={disabled}>
      <IconContainer>
        <PlusIcon size={28} fill={'white'} />
      </IconContainer>
      {action}
    </CardBtnStyled>
  );
};
