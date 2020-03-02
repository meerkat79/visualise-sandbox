import React, { Fragment } from 'react'
import AppNavBar from '../../global/app-nav-bar/app-nav-bar';
import DrawerMenu from '../../global/drawer-menu/drawer-menu';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showDrawerMenu: false
        };
    }

    handleDrawerState = (v) => {
        console.log('fn fired', v);
        this.setState({...this.state,showDrawerMenu: v});
        console.log(this.state.showDrawerMenu);
    };

    render() {
        return(
            <Fragment>
                <AppNavBar isDrawOpen={this.handleDrawerState}></AppNavBar>
                <DrawerMenu drawerMenu={this.state.showDrawerMenu}></DrawerMenu>
                <main>
                    <section>
                    <h1>Start</h1>
                    </section>
                </main>
            </Fragment>
        );
    }
}