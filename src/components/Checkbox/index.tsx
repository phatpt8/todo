import React, { ChangeEvent, useState } from "react";

import "./index.css";

interface Props {
  label: string;
  name: string;
  defaultChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, name, defaultChecked, onChange }: Props) => {
  const [value, setValue] = useState(defaultChecked);

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={value}
        onChange={(e) => {
          onChange(e);
          setValue(e.target.checked);
        }}
        className="hidden-input"
      />
      <label htmlFor={name} className="checkbox-label">
        <div className={`box ${value ? "checked" : ""}`} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
