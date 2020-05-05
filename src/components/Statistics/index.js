import React from 'react';
import { Statistic, Row, Col, Card} from 'antd';

/**
 * Stats Component
 * @param {*} props 
 */
function StatisticsComponent(props){
  let statistics = [
    {id:'cases', label: 'Cases'},
    {id:'todayCases', label: 'Today Cases'},
    {id:'deaths', label: 'Deaths'},
    {id:'todayDeaths', label: 'Today Deaths'},
    {id:'recovered', label: 'Recovered'},
    {id:'active', label: 'Active'},
    {id:'critical', label: 'Critical'},
    {id:'casesPerOneMillion', label: 'Cases Per Million'},
    {id:'tests', label: 'Tests'},
    {id:'deathsPerOneMillion', label: 'Deaths Per Million'},
    {id:'testsPerOneMillion', label: 'Tests Per Million'},
    {id:'affectedCountries', label: 'Affected Countries'}
  ];

  return(
    <div className="site-statistic-demo-card">
      <Row gutter={16} style={{marginBottom: '0em', padding: '0 15px', marginTop: 80 }}>
        {
          statistics.map((e) => {
            return (
              <Col span={4}>
                <Card>
                  <Statistic title={e.label} value={props.stats[e.id]} />
                </Card>
              </Col>
            );
          })
        }
    </Row>
  </div>
  );
}

export default StatisticsComponent;