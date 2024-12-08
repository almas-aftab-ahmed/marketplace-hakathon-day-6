import * as React from 'react';
import { StepHeaderProps } from '../types';

export const StepHeader: React.FC<StepHeaderProps> = ({ title, subtitle, step }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mt-1 text-sm font-medium tracking-tight text-slate-400">
          {subtitle}
        </p>
      </div>
      <div className="self-end mt-8 text-sm font-medium tracking-tight text-right text-slate-400">
        {step}
      </div>
    </div>
  );
};