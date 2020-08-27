import React, { Component } from 'react'
import AuthService from '../../service/AuthService'

export default class Profile extends Component {
    render() {
        const user = AuthService.getCurrentUser()
        console.log(user)
        return (
            <div className="container">
                <h1 className="h3 mt-5 mb-3 font-weight-normal">Profile</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                {user.roles}
            </div>
        )
    }
}
