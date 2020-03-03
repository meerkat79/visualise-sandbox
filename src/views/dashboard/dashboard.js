import React, { Fragment } from 'react'
import AppNavBar from '../../global/app-nav-bar/app-nav-bar';
import Footer from '../../global/footer/footer';
import DrawerMenu from '../../global/drawer-menu/drawer-menu';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showDrawerMenu: false
        };
    }

    handleDrawerState = (v) => {
        console.log('handleDrawerState fired from dash', v );
        this.setState({...this.state,showDrawerMenu: v});
    };

    render() {
        console.log(this.state.showDrawerMenu);
        return(
            <Fragment>
                <AppNavBar isDrawOpen={this.handleDrawerState}></AppNavBar>
                <DrawerMenu open={this.state.showDrawerMenu} isDrawOpen={this.handleDrawerState}></DrawerMenu>
                <main>
                    <section>
                    <h1>Start</h1>
                    </section>
                </main>
                <Footer></Footer>
            </Fragment>
        );
    }
}