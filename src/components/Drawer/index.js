import React from 'react';
import { Drawer, Typography, Divider, Col, Row } from 'antd';
import {connect} from 'react-redux';
const { Title, Text} = Typography;

const style = {
  fontSize: 16,
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    className="site-description-item-profile-wrapper"
    style={{
      fontSize: 16,
      lineHeight: '22px',
      marginBottom: 7,
      fontWeight: '30px'
    }}
  >
    <p
      className="site-description-item-profile-p"
      style={{
        marginRight: 8,
        color: '#a8a8a8',
        display: 'inline-block',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);
/**
 * Drawer Component
 * @param {*} props 
 */
function DrawerComponent(props){
  return (
    <Drawer
      width={640}
      placement="right"
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
    >
      <p className="site-description-item-profile-p" style={{ ...style, marginBottom: 24 }}>
        <Title level={3}>Country</Title>
      </p>
      <Row style={{marginBottom: 10}}>
        <Col span={12}>
          <img
            style={{width: '30%', height: 50}}
            alt="country"
            src={props.selected && props.selected.countryInfo ? props.selected.countryInfo.flag: ''}
          />
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Text type='secondary'>Country: </Text><Text strong>{props.selected.country}</Text>
        </Col>
        <Col span={12}>
          <DescriptionItem title="Updated" content={new Date(props.selected.updated).toDateString().substring(0, 10)} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="ISO 2" content={props.selected && props.selected.countryInfo ? props.selected.countryInfo.iso2: ''} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="ISO 3" content={props.selected && props.selected.countryInfo ? props.selected.countryInfo.iso3: ''} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="lat" content={props.selected && props.selected.countryInfo ? props.selected.countryInfo.lat: ''}/>
        </Col>
        <Col span={12}>
          <DescriptionItem title="long" content={props.selected && props.selected.countryInfo ? props.selected.countryInfo.long: ''} />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p" style={style}>
        <Title level={4}>Details:</Title>
      </p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Cases" content={props.selected.cases} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Today Cases" content={props.selected.todayCases} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Deaths" content={props.selected.deaths} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Today Deaths" content={props.selected.todayDeaths} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem
            title="Recovered"
            content={props.selected.recovered}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Active" content={props.selected.active} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Critical" content={props.selected.critical} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Cases Per Million" content={props.selected.casesPerOneMillion} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Deaths Per Million" content={props.selected.deathsPerOneMillion} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Tests" content={props.selected.tests} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Tests Per Million" content={props.selected.testsPerOneMillion} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
            <DescriptionItem title='Continent' content={props.selected.continent}/>
        </Col>
      </Row>
    </Drawer>
  );
}

const mapDispatchToProps = dispatch => {
  return({
  })
}

const mapStateToProps = state => ({
  selected: state.covid.selectedCountry
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);