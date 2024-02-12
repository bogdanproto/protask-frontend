export const RadioBtn = ({ name, value, id, onChange, content, ...props }) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={value}>{content}</label>
    </>
  );
};
