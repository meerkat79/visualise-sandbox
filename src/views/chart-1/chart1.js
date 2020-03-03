import React       from 'react';

export default class Chart1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  randomizeData() {
    // temp
  }

  render() {
    return <div>
      <h1>Playing With React and D3</h1>
      <div className="controls">
        <button className="btn randomize" onClick={() => this.randomizeData()}>
          Randomize Data
        </button>
      </div>
    </div>
  }
}