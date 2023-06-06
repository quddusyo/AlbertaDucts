import React from 'react';
import { serviceArray } from '../serviceStore'
import ServiceCard from '../StoreComponents/ServiceCard';

const Store = () => {
  return (
    <>
      {serviceArray.map((service, idx) => (
        <ServiceCard service={service} key={idx}/>
      ))}
    </>
  )
}

export default Store