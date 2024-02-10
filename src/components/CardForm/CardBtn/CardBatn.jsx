import { PlusIcon } from '../../common/IconsLibrary/index';
import { CardBtnStyled, IconContainer } from './CardBtn.styled';

export const CardBtn = ({ action }) => {
  return (
    <CardBtnStyled type="button">
      <IconContainer>
        <PlusIcon size={28} fill={'white'} />
      </IconContainer>
      {action}
    </CardBtnStyled>
  );
};
