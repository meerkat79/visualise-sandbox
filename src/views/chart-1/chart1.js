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

    // run iteration on data and remap for options
    console.log(this.state.nameData);

    const options = {
      title: {
        text: "Canvas Bar Chart"
      },
      data: [{				
                type: "column",
                dataPoints: [
                    { label: "Apple",  y: 10  },
                    { label: "Orange", y: 15  },
                    { label: "Banana", y: 25  },
                    { label: "Mango",  y: 30  },
                    { label: "Grape",  y: 28  }
                ]
       }]
   }
    return (
      <div className="chart">
        <AppNavBar isDrawOpen={this.handleDrawerState}></AppNavBar>
        <DrawerMenu open={this.state.showDrawerMenu} isDrawOpen={this.handleDrawerState}></DrawerMenu>
        <h1>Playing With React and D3</h1>
        <p>Test Chart using d3</p>
        <BarChart />

      <p>A Canvas JS example</p>

      <CanvasJSChart options = {options}/>
        
      </div>
    )
  }


}