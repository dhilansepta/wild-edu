import React from 'react'

interface inputProps {
  htmlFor: string
  label: string
  type: string
  id: string
  name: string
  value: string
  isRequired: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ htmlFor, label, type, id, name, value, isRequired, onChange}: inputProps) => {
  return (
    <div className=''>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-light">
        {label}
      </label>
      {isRequired
        ? <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 bg-light text-dark rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        /> :
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 bg-light text-dark rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      }
    </div>
  )
}

export default Input