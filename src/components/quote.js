import React from 'react';

const quote = ({Quote, Author, Id}) => {
  return (
    <div className='' id={Id}>
      <h1 className=''>{Quote}</h1>
      <h3 className=''>{Author}</h3>
    </div>
  )
}

export default quote;