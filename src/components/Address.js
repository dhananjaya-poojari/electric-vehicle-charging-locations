import React from "react";
import Addres from './SearchData/Addres'

const Address = (address) => {
  return (
    <>
      {address.address.map((addres, index) => (
        <Addres key={index} addres={addres} />
      ))}
    </>
  );
};

export default Address;
