import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
/**
 * Card Component
 * @param {*} props 
 */
function CardComponent(props){
  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      cover={
        <img
          style={{width: '100%', height: 140}}
          alt="country-card"
          src={props.country.countryInfo.flag}
        />
      }
    >
      <Meta
        title={props.country.country}
        description={props.country.continent}
      />
    </Card>    
  );
};

export default CardComponent;