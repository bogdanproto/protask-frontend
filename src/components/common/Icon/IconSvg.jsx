import Icons from 'data/svg/sprite.svg';

export const IconSvg = ({ id, className, ...props }) => {
  return (
    <svg className={className} {...props}>
      <use href={`${Icons}#${id}`} />
    </svg>
  );
};
