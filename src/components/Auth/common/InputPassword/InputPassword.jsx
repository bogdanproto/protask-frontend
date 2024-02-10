import { useState } from 'react';
import { InputAuthStyled } from '../InputAuth/InputAuth.styled';
import { IconButton } from 'components/common';
import { LuEye } from 'react-icons/lu';
import { InputPasswordStyled } from './InputPassword.styled';

export const InputPassword = ({ type, eyeColor, ...props }) => {
  const [showText, setShowText] = useState(false);

  const toggleShowText = () => {
    setShowText(!showText);
  };

  return (
    <InputPasswordStyled>
      <InputAuthStyled type={showText ? 'text' : 'password'} {...props} />
      <IconButton type="button" onClick={toggleShowText}>
        <LuEye color= {eyeColor} fontSize="18px" />
      </IconButton>
    </InputPasswordStyled>
  );
};
