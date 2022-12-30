/* eslint-disable react/prop-types */
export const Input = ({ name, type, label, handleChange, value, placeholder, id }) => {

  return (
    <div className="rounded-md p-2 flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        className="rounded-sm p-2 border"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
