import React from 'react';

const Cancel = () => {
  return (
    <div align='center' style={{marginTop: '50vh'}}>
      <h1>Sorry to see you cancelled your stripe payment!</h1>
      <a href='/services/store' className='a__nostyle'>Back To Store</a>
    </div>
  )
}

export default Cancel;