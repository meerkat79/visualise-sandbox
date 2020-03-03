import React from 'react';
import * as d3 from 'd3';

const nameData = './data/nameData.json';
const scopeData = './data/scopeData.json';

export default class Chart1 extends React.Component {

  constructor(props){
    super(props)
  
    this.state = {
      initialBooks:[
        {
            name: "Harry Potter and the Philosophers Stone",
            author: "J. K. Rowling",
            genre: "fantasy"
        },{
            name: "The Pedagogy of Freedom",
            author: "Bell hooks",
            genre: "non-fiction"
        },{
            name: "Harry Potter and the Chamber of Secrets",
            author: "J. K. Rowling",
            genre: "fantasy"
        },{
            name: "Gilgamesh",
            author: "Derrek Hines",
            genre: "poetry"
        }
    ],
    nameData: [],
    scopeData: []
    }
  }

  getData = () => {
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

    d3.selectAll("p").style("color", "blue");
    d3.select(this.refs.test).style("background-color", "blue");

    this.getData();

  }

  render () {
    return (
      <div>
        <h1>Playing With React and D3</h1>
        <p>test</p>
        <div ref="test">foo bar</div>
      </div>
    )
  }


}