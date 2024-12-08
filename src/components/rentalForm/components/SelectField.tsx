import * as React from 'react';
import { SelectFieldProps } from '../types';
import Image from 'next/image';

export const SelectField: React.FC<SelectFieldProps> = ({ label, placeholder, icon }) => {
  const selectId = `${label.toLowerCase().replace(/\s+/g, '-')}-select`;
  
  return (
    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
      <label htmlFor={selectId} className="text-base font-semibold tracking-tight text-gray-900">
        {label}
      </label>
      <div className="flex flex-col mt-4 w-full text-sm font-medium tracking-tight rounded-none max-w-[386px] text-slate-400">
        <div className="flex gap-5 justify-between px-7 py-5 rounded-xl bg-neutral-100">
          <select 
            id={selectId}
            className="w-full bg-transparent"
            aria-label={label}
          >
            <option value="">{placeholder}</option>
          </select>
          <Image
            loading="lazy"
            src={icon}
            alt=""
            height={6}
            width={6}

            className="object-contain shrink-0 self-start w-3.5 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};