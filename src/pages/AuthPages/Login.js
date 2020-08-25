import React, { Component } from 'react'
import AuthService from '../../service/AuthService'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        AuthService.login(this.state.username, this.state.password)
            .then(data => this.props.history.push('/memes'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-login">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            name="username"
                            id="username"
                            onChange={this.handleChange}
                            value={this.state.username} />
                    </div>
                    <div className="form-login">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={this.handleChange}
                            value={this.state.password} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login