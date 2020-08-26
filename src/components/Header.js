import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {

    let search = ''
    
    const handleChange = (e) => {
        [e.target.name] = e.target.value
    }

    return (
        <header>
            <div className="logo">
                <Link to={'/memes'}><img src="/LogoAlltheMemes.png" alt="Memes!" /></Link>
            </div>
            <div className="routes">
                <ul>

                    {props.user.roles[0] === "ROLE_ADMIN" || props.user.roles[0] === "ROLE_MODERATOR" ?
                        <li><Link to={`/dashboard`}>User Dashboard</Link></li>
                    :
                        <></>
                    }

                    <li>
                        <Link to={search ?
                            `/memes/search/${search}`
                            :
                            `/memes`}>Search: #</Link>
                        <input type="text"
                            name="search"
                            value={search}
                            onChange={handleChange}
                            placeholder="Search Memes by their Tags" />
                    </li>

                    {props.user ?
                        <>
                            <li><Link to={'/memes/new'}>Add a Meme!</Link></li>
                            <li><Link to={'/profile'}>Profile</Link></li>
                            <li><Link onClick={props.logout}>Logout</Link></li>
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
export default Header