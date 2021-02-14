import React from "react";
import Card from './SearchData/Card'

const Address = ({searchData}) => {
  var color=['#C6E2FF','#B2CBE5','#c1d5ea','#D0DFEF','#7C8EA0']
  return (
    <>
      {searchData.map((result, index) => (
        <Card key={index} result={result} color={color[Math.floor((Math.random() * 3) + 0)]} />
      ))}
    </>
  );
};

export default Address;
