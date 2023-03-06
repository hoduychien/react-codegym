import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        alert('Goodbye!!!');
    }
    render() {
        console.log(this.props);
        return (
            <div className="home-login">
                <div class="card">
                    <h5 class="card-header">Welcome</h5>
                    <div class="card-body">
                        <h6 class="card-title">{this.props.userInfo}</h6>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-primary" onClick={this.props.handleLogout}>
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
