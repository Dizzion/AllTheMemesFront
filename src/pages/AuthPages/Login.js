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
            .then(res => {
                if(!res.data.token) {
                    return false
                }
                this.props.storeUser(res.data)
                this.props.history.push('/memes')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="body">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Please login</h1> 
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input 
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.username} 
                            placeholder="Username" />
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="Password" />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login