import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Welcome</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'));
}
