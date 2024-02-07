import sprite from 'data/svg/sprite.svg';
import { Button } from './Btn.styled';

export const Btn = ({ text, variant, type = 'button', onClick }) => {
  let iconSize;
  let className;

  variant === 'plus'
    ? (iconSize = 20) && (className = 'btn btn-plus')
    : variant === 'plusSmall'
    ? (iconSize = 10) && (className = 'btn btn-plus btn-small')
    : variant === 'primaryWithIcon'
    ? (iconSize = 28) && (className = 'btn btn-primary btn-icon')
    : variant === 'primary'
    ? (className = 'btn btn-primary')
    : variant === 'secondary'
    ? (className = 'btn btn-secondary')
    : variant === 'logout' && (className = 'btn btn-logout')
    ? (iconSize = 32)
    : (iconSize = 28);

  const iconPlus = (
    <svg width={iconSize} height={iconSize}>
      <use href={sprite + '#icon-plus'} />
    </svg>
  );

  const iconLogout = (
    <svg width={iconSize} height={iconSize}>
      <use href={sprite + '#icon-logout'} />
    </svg>
  );

  return (
    <Button type={type} className={className} onClick={onClick}>
      {variant &&
        variant !== 'secondary' &&
        variant !== 'primary' &&
        variant !== 'logout' &&
        iconPlus}
      {variant === 'logout' && iconLogout}
      {text && text}
    </Button>
  );
};
