import * as React from 'react';
import { PaymentMethodProps } from '../types';
import Image from 'next/image';

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ icon, name, logo }) => {
  return (
    <div className="flex flex-wrap gap-10 px-8 py-4 w-full text-base font-semibold tracking-tight text-gray-900 whitespace-nowrap rounded-xl bg-neutral-100">
      <div className="flex flex-1 gap-5">
        <Image
          loading="lazy"
          src={icon}
          alt=""
          height={6}
          width={6}
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div>{name}</div>
      </div>
      {logo && (
        <Image
          loading="lazy"
          src={logo}
          height={6}
          width={6}
          alt=""
          className="object-contain shrink-0 max-w-full aspect-[4.17] w-[100px]"
        />
      )}
    </div>
  );
};