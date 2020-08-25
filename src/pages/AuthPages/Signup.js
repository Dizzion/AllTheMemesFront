import React, { Component } from 'react'
import AuthService from '../../service/AuthService'

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.password === this.state.password2) {
            AuthService.signup(this.state.username, this.state.email, this.state.password)
                .then(data => {
                    this.setState({
                        username: '',
                        email: '',
                        password: '',
                        password2: ''
                    })
                    this.props.history.push('/login')
                })
        }
    }
    render() {
        return (
            <div>
                <h3>Signup!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-signup">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.username} />
                    </div>
                    <div className="form-signup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email} />
                    </div>
                    <div className="form-signup">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password} />
                    </div>
                    <div className="form-signup">
                        <label htmlFor="password2">Confirm Password</label>
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            onChange={this.handleChange}
                            value={this.state.password2} />
                    </div>
                    <button type="submit">Signup!</button>
                </form>
            </div>
        )
    }
}

export default Signup