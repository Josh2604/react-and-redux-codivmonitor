import React from 'react';
import { Layout, Row, Col, Menu} from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

import {SetCountries, SelectedCountry} from './../../actions/covid';
import Card from './../Card';
import DrawerComponent from './../Drawer/';
import Statistics from './../Statistics/';
import Search from './../Search/';

const { Header, Content } = Layout;


/**
 * Home Component
 * @param {*} props 
 */
function HomeComponent(props){
  let [visible, setVisible] = React.useState(false);
  let [allStats, setAllStats] = React.useState({});

  // ? Set visible drawer 
  function setVisibleFn(country){
    setVisible(true);
    props.SelectedCountry(country);
  }

  // ? On close function
  function onCloseD(){
    setVisible(false)
  }

  // Get countries 
  const {SetCountries} = props;
  const GetCountries = React.useCallback(async() => {
    try{
      // if (!sessionStorage.getItem('countries-cpm')){
        let response = await axios.get('https://corona.lmao.ninja/v2/countries');
        sessionStorage.setItem('countries-cpm', JSON.stringify({countries: response.data}));
        SetCountries(response.data);
      // } else {
      //   let countries_ses = sessionStorage.getItem('countries-cpm');
      //   let parsedCountries = JSON.parse(countries_ses);
      //   props.SetCountries(parsedCountries.countries);

      // }
      let all_stats = await axios.get('https://corona.lmao.ninja/v2/all');
      setAllStats(all_stats.data);
      
    }catch(error){
      console.log('error ==<', error);
    }
  }, [SetCountries]);

  React.useEffect(() => {
    GetCountries();
  }, [GetCountries]);

  return (
    <React.Fragment>
    <div>
    <Layout className='container'>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">COVID-19</Menu.Item>
        </Menu>
      </Header>
      <Statistics stats={allStats}/>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Search/>
          <Row gutter={[32, 32]}>
            {
              props.countrySelected === 'all' ?
                props.countries.map((country) => {
                  return <Col key={country.country} span={4} onClick={() => setVisibleFn(country)}><Card country={country}/></Col>
                })              
              :
                _.filter(props.countries, ['country', props.countrySelected]).map((country) => {
                  return <Col key={country.country} span={4} onClick={() => setVisibleFn(country)}><Card country={country}/></Col>
                })
            }
          </Row>
        </div>
      </Content>
    </Layout>      
    </div>
    <DrawerComponent visible={visible} onClose={onCloseD}></DrawerComponent>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return({
    SetCountries: (countries) => dispatch(SetCountries(countries)),
    SelectedCountry: (country) => dispatch(SelectedCountry(country))
  })
}

const mapStateToProps = state => ({
  countries: state.covid.countries,
  countrySelected: state.covid.countrySelected
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);