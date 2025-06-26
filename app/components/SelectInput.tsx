import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  options: Option[];
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({ label, options, value, name, onChange }: SelectInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-light">
        {label}
        <select 
          name={name}
          className="w-full py-2 px-4 bg-light text-dark font-semibold rounded-md" 
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectInput;