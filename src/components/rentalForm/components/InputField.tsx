import * as React from 'react';
import { InputFieldProps } from '../types';

export const InputField: React.FC<InputFieldProps> = ({ label, name, placeholder, type = "text", value, onChange }) => {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input`;
  
  return (
    <div className="flex flex-col">
      <label htmlFor={inputId} className="text-base font-semibold tracking-tight text-gray-900">
        {label}
      </label>
      <div className="flex flex-col mt-4 max-w-full text-sm font-medium tracking-tight rounded-xl text-slate-400 w-[386px]">
        <input
          type={type}
          id={inputId}
          name={name} // ✅ FIXED: name prop added
          value={value} // ✅ FIXED: value prop added
          onChange={onChange} // ✅ FIXED: onChange handler added
          placeholder={placeholder}
          className="px-8 py-6 rounded-xl bg-neutral-100 w-full"
          aria-label={label}
        />
      </div>
    </div>
  );
};
