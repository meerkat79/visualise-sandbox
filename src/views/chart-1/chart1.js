import React from 'react';
import * as d3 from 'd3';

import AppNavBar from '../../global/app-nav-bar/app-nav-bar';
import DrawerMenu from '../../global/drawer-menu/drawer-menu';
import BarChart from '../bar-chart/bar-chart';

import CanvasJSReact from '../../vendor/canvasjs.react';
import './chart.css';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const nameData = './data/nameData.json';
const scopeData = './data/scopeData.json';


export default class Chart1 extends React.Component {

  constructor(props){
    super(props)
  
    this.state = {
      showDrawerMenu: false,
      nameData: [],
      scopeData: [],
      temperatureData: [ 8, 5, 13, 9, 12 ],
      dataPoints: []
    }
  }

  fetchData = () => {
    // first get name data
    fetch(nameData)
      .then(res => {
        return res.json();
      }).then(data => {        
        this.setState({nameData: data.nameData});
      })

    // next get scope data
    fetch(scopeData)
      .then( res => {
        return res.json();
      })
      .then(data => {
        this.setState({scopeData: data.scopeData});
      })
  }

  handleDrawerState = v => {
    console.log('handleDrawerState fired from chart', v );
    this.setState({...this.state,showDrawerMenu: v});
};


  componentDidMount() {
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

    console.log('our state at render of component', this.state);
    console.log('our dataPoints array at render of component', this.state.dataPoints);

    this.state.nameData.forEach(item => {
      this.state.dataPoints.push({label: item.name, y: item.marketSum});
    });    

    const options = {
      zoomEnabled: true,
      title: {
        text: "Canvas Bar Chart"
      },
      data: [{				
                type: "column",
                dataPoints: this.state.dataPoints
       }]
   }

    return (
      <div className="chart">
        <AppNavBar isDrawOpen={this.handleDrawerState}></AppNavBar>
        <DrawerMenu open={this.state.showDrawerMenu} isDrawOpen={this.handleDrawerState}></DrawerMenu>
        <h1>Playing With React, D3 and Canvas</h1>
        <p>A Canvas JS example, try dragging your mouse and making a selection on the chart!</p>

        <h2>Test Chart using Canvas JS</h2>
        <CanvasJSChart options = {options}/>

        <h2>Test Chart using d3</h2>
        <BarChart />
        
      </div>
    )
  }


}