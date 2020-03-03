import React from 'react';
import { Link } from 'react-router-dom';

export default class Error extends React.Component {
    render() {
        return (
            <div className="app-error">
                There has been an error. Return to <Link to="/">start?</Link>
            </div>
        );
    }
}