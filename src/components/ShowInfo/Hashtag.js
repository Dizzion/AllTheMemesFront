import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Hashtag extends Component {

    render() {
        let tagList = this.props.tags.map((tag, i) => {
            if (tag !== "") {
                return <li key={i}><Link to={`/memes/search/${tag}`}>#{tag}</Link></li>
            }
        })

        return (
            <ul>
                { tagList }
            </ul>
        )
    }
}

export default Hashtag