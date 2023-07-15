import React from 'react';
import {TopSection} from "./topsection";
import {Products} from "./products";
import { BedCollection } from './bedcollection';
import { Feature } from './feature';
import { SpecialProduct } from './specialproducts';

export const Home = () => {
  return (
    <div>
        <TopSection/>
        <Products/>
        <BedCollection/>
        <Feature/>
        <SpecialProduct/>
    </div>
  )
}
