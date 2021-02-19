import React from "react";

interface Props {
  label: string;
  name: string;
}

const Checkbox = ({ label, name, defaultValue, onChange }: Props) => (
  <div>
    <input
      type="checkbox"
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
    />
    <label htmlFor={name}>{label}</label>
  </div>
);

export default Checkbox;
