import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import MemeSearch from '../pages/MemePages/MemeSearch'
import MemeShow from '../pages/MemePages/MemeShow'
import NewMeme from '../pages/MemePages/NewMeme'
import EditMeme from '../pages/MemePages/EditMeme'

import Login from '../pages/AuthPages/Login'
import Signup from '../pages/AuthPages/Signup'
import Profile from '../pages/AuthPages/Profile'

export default (props) => (
    <Switch>
        <Route exact path='/memes' component={ Home } />
        <Route path='/signup' component={ Signup } />
        <Route path='/profile' component={ Profile } />
        <Route path='/login' render={ (routeComponentProps) => {
            return <Login
                        {...routeComponentProps}
                        user={props.user}
                        storeUser={props.storeUser}
                    />
        } } /> 
        <Route exact path='/memes/search/:hashtag' component={ MemeSearch } />
        <Route path='/memes/new' component={ NewMeme } />
        <Route exact path='/memes/:id' component={ MemeShow } />
        <Route path='/memes/:id/edit' component={ EditMeme } />
    </Switch>
)