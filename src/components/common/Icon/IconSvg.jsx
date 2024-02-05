import Icons from './../../../data/svg/sprite.svg'

export const IconSvg = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={Icons + '#icon-' + id} />
    </svg>
  );
};
