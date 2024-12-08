import * as React from 'react';
import { ReviewType } from './types';
import Image from 'next/image';

interface ReviewCardProps {
  review: ReviewType;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex gap-4">
          <Image
            loading="lazy"
            src={review.avatar}
            alt={review.name}
            height={14}
            width={14}
            className="object-contain shrink-0 w-14 aspect-square rounded-[60px]"
          />
          <div className="flex flex-col">
            <div className="text-xl font-bold tracking-tight text-gray-900">
              {review.name}
            </div>
            <div className="mt-2 text-sm font-medium tracking-tight text-slate-400">
              {review.role}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm font-medium tracking-tight leading-5 text-right text-slate-400">
            {review.date}
          </div>
          <div className="flex overflow-hidden gap-0.5 items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                loading="lazy"
                src={index < review.rating ? "/images/star.svg" : "/images/s2.svg"}
                alt=""
                height={6}
                width={6}
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 ml-20 text-sm tracking-tight leading-7 text-slate-500 max-md:max-w-full">
        {review.comment}
      </div>
    </div>
  );
}