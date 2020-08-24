import React, { Component } from 'react'
import AuthService from '../service/AuthService'
import './Header.scss'
import { Link } from 'react-router-dom'
import MemeModel from '../model/MemesModel'

export default class Header extends Component {
    state = {
        search: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <header>
                <div className="logo">
                    <Link to={'/memes'}><img src="/LogoAlltheMemes.png" alt="Memes!" /></Link>
                </div>
                <div className="routes">
                    <ul>
                        { AuthService.getCurrentUser() ?    
                            <li><Link to={'/memes/new'}>Add a Meme!</Link></li>
                        :
                            <li/>
                        }
                        
                        <li>
                            <Link to={`/memes/search`}>
                                <button href={`/memes/search/${this.state.search}`} htmlFor="search">Search: #</button>
                            </Link>
                            <input type="text"
                                name="search"
                                value={this.state.search}
                                onChange={this.handleChange}
                                placeholder="Search Memes by their Tags" />
                        </li>

                        { AuthService.getCurrentUser() ?
                            <>
                                <li><Link to={'/profile'}>Profile</Link></li>
                                <li><a href="/memes" onClick={AuthService.logout()}>Logout</a></li>
                            </>
                        :
                            <>
                                <li><Link to={'/signup'}>Signup</Link></li>
                                <li><Link to={'/login'}>Login</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </header>
        )
    }
}
