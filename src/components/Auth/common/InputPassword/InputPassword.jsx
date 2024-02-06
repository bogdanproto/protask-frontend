import { useState } from 'react';
import { InputAuthStyled } from '../InputAuth/InputAuth.styled';
import { Icon, IconButton } from 'components/common';
import { IconSvg } from 'components/common/Icon/IconSvg';

export const InputPassword = ({ type, ...props }) => {
  const [showText, setShowText] = useState(false);

  const toggleShowText = () => {
    setShowText(!showText);
  };

  return (
    <>
      <InputAuthStyled type={showText ? 'text' : 'password'} {...props} />
      <IconButton type="button" onClick={toggleShowText}>
        <IconSvg fill="#c62222" id={'user'} />
      </IconButton>
    </>
  );
};
