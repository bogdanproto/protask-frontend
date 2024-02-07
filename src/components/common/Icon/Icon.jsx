export const Icon = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={`sprite.svg#${id}`} />
    </svg>
  );
};
