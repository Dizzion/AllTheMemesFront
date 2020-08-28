import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { NavbarBrand } from 'reactstrap'

class Header extends React.Component {

    state = {
        hashtag: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
                    <NavbarBrand href="/memes"><img src="/LogoAlltheMemes.png" alt="" /></NavbarBrand>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">



                            {this.props.user ?
                                <>
                                    <li className="navbar-item"><Link className="nav-link" to={'/memes/new'}>Add a Meme!</Link></li>
                                    <li className="navbar-item"><Link className="nav-link" to={'/memes/create'}>Create a Meme!</Link></li>
                                    <li className="navbar-item"><Link className="nav-link" to={'/profile'}>Profile</Link></li>
                                    <li className="navbar-item"><button className="nav-link btn" onClick={this.props.logout}>Logout</button></li>
                                </>
                                :
                                <>
                                    <li className="navbar-item"><Link className="nav-link" to={'/signup'}>Signup</Link></li>
                                    <li className="navbar-item"><Link className="nav-link" to={'/login'}>Login</Link></li>
                                </>
                            }
                        </ul>

                        <div className="form-inline my-2 my-lg-0">
                            <Link className="btn btn-success my-2 my-sm-0" to={this.state.hashtag ?
                            `/memes/search/${this.state.hashtag}`
                            :
                            `/memes`}>Search: #</Link>
                            <input type="text"
                                name="hashtag"
                                className="form-control mr-sm-2"
                                value={this.state.hashtag}
                                onChange={this.handleChange}
                                placeholder="Search Memes by Tags" />
                        </div>

                    </div>
                </nav>
            </header>
        )
    }
}
export default Header