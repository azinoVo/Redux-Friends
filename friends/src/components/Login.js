import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            userInfo: {
                username: '',
                password: ''
            }
        }
    }

    handleChanges = event => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [event.target.name]: event.target.value
            }
        })

        console.log(this.state.userInfo.username, this.state.userInfo.password)

    }

    login = event => {
        event.preventDefault();
        this.props.login(this.state.userInfo);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.userInfo.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.userInfo.password}
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.login}>
                        {this.props.isLoggingIn ? (
                            'Loading...'
                        ) : (
                                'Log in'
                            )}
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
});

export default connect(mapStateToProps, { login })(Login);