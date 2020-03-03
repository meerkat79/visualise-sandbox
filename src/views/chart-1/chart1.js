import React from 'react';
import * as d3 from 'd3';

import AppNavBar from '../../global/app-nav-bar/app-nav-bar';
import DrawerMenu from '../../global/drawer-menu/drawer-menu';
import BarChart from '../bar-chart/bar-chart';

const nameData = './data/nameData.json';
const scopeData = './data/scopeData.json';

export default class Chart1 extends React.Component {

  constructor(props){
    super(props)
  
    this.state = {
    nameData: [],
    scopeData: [],
    temperatureData: [ 8, 5, 13, 9, 12 ]
    }
  }

  fetchData = () => {
    // first get name data
    fetch(nameData)
      .then(res => {
        return res.json();
      }).then(data => {        
        this.setState({nameData: data.nameData});
      });

    // next get scope data
    fetch(scopeData)
      .then( res => {
        return res.json();
      })
      .then(data => {
        this.setState({scopeData: data.scopeData});
        console.log(this.state);
      })
  }


  componentDidMount() {

    // d3.selectAll("p").style("color", "blue");
    // d3.select(this.refs.chart).style("background-color", "blue");

    d3.select(this.refs.chart)
      .selectAll('li')
      .data(this.state.temperatureData)
      .enter()
        .append('li')
        .text((dataPoint)=>{
          return dataPoint + ' degrees'
        })

    this.fetchData();

  }

  render () {
    return (
      <div>
        <AppNavBar isDrawOpen={this.handleDrawerState}></AppNavBar>
        <DrawerMenu open={this.state.showDrawerMenu} isDrawOpen={this.handleDrawerState}></DrawerMenu>
        <h1>Playing With React and D3</h1>
        <p>Test Chart</p>
        <BarChart />
      </div>
    )
  }


}