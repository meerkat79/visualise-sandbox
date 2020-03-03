import React, { Fragment } from 'react'
import AppNavBar from '../../global/app-nav-bar/app-nav-bar';
import Footer from '../../global/footer/footer';
import DrawerMenu from '../../global/drawer-menu/drawer-menu';

import './dashboard.css';

const nameData = './data/nameData.json';
const scopeData = './data/scopeData.json';

const ResponseContainer = props => {
        return(<code className="name-items">
            <p><strong>Let's turn this into something meaningful. Click open and select a chart.</strong></p>
            {JSON.stringify(props.items)}
         </code>);
 };

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showDrawerMenu: false,
            nameData: [],
            scopeData: []
        };
    }

    handleDrawerState = v => {
        console.log('handleDrawerState fired from dash', v );
        this.setState({...this.state,showDrawerMenu: v});
    };

    items = [];

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
            this.namedDataMarkup(this.state.nameData);
            })
      }

      componentDidMount() {
          this.fetchData();
      }

      loadingMarkup = ()=>{
          return <div>loading...</div>;
      }

      namedDataMarkup = (val) => {
        return `<code>{val}</code>`
      }

    render() {
        return(
            <Fragment>
                <AppNavBar isDrawOpen={this.handleDrawerState}></AppNavBar>
                <DrawerMenu open={this.state.showDrawerMenu} isDrawOpen={this.handleDrawerState}></DrawerMenu>
                <main className="dashboard">
                    <section>
                        <h1>Visualise: Data Model</h1>
                        <ul>
                            {this.state.nameData.length > 0 ? <ResponseContainer items={this.state.nameData}></ResponseContainer>: this.loadingMarkup()}
                        </ul>
                    </section>
                </main>
                <Footer></Footer>
            </Fragment>
        );
    }
}
