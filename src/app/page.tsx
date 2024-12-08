
import { CarRecommendationPage } from '@/components/CarRecommendationPage';
import Hero from '@/components/Hero';
import { PopularCarPage } from '@/components/PopularCarPage';

import React from 'react';

const page = () => {
  return (
    <div>
     
      <Hero/>
      <PopularCarPage/>
      <CarRecommendationPage/>
     
    </div>
  );
}

export default page;
