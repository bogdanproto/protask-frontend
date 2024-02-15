import { useState } from 'react';
import sprite from 'data/svg/sprite.svg';
import { InputPasswordFormStyle } from './InputPasswordForm.styled';

export const InputPasswordForm = ({ type, ...props }) => {
  const [showText, setShowText] = useState(false);

  const toggleShowText = () => {
    setShowText(!showText);
  };

  return (
    <InputPasswordFormStyle>
      <input type={showText ? 'text' : 'password'} {...props} />
      <button type="button" onClick={toggleShowText}>
        <svg width="18" height="18">
          <use href={sprite + '#icon-burger_menu'}></use>
        </svg>
      </button>
    </InputPasswordFormStyle>
  );
};
