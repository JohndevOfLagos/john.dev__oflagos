import React from 'react';
import { Hero } from './Hero/Hero';
import { HeroBottom } from './Hero/HeroBottom';

export const Home = () => {
  return (
    <div className='Home'>
      <Hero/>
      <HeroBottom/>
    </div>
  )
}
