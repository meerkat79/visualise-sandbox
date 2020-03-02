import React from 'react';

export default class Error extends React.Component {
    render() {
        return (
            <div className="app-error">
                There has been an error. Return to <a href="/">start?</a>
            </div>
        );
    }
}