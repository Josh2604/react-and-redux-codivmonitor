import React from 'react';
import { connect } from 'react-redux';
import {Input, Row, Col, Select} from 'antd';
import { SetCountry } from './../../actions/covid';

const {Option} = Select;

/**
 *  Search Component
 * @param {*} props 
 */
function SearchComponent(props){

  function onSelectedCountry(e){
    props.SetCountry(e);
  }
  
  return (
    <Row gutter={[8, 16]}>
      <Col span={6}>
        <Input.Group>
          <Select defaultValue='all' style={{width: '100%'}} onChange={onSelectedCountry}>
            <Option  value={'all'}>All</Option>  
            {
              props.items.map(item => {
                return (
                  <Option key={item.country} value={item.country}>{item.country}</Option>  
                );
              })
            }
          </Select>
        </Input.Group>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = dispatch => ({
  SetCountry: (country) => dispatch(SetCountry(country))
});

const mapStateToProps = state => ({
  items: state.covid.countries
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);