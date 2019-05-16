import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChanges = event => {
        this.setState({
            ...this.state.credentials,
            [event.target.name]: event.target.value
        })

    }

    login = event => {
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log-In</button>
                </form>
            </div>
        );
    }
}

export default Login;