import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Hashtag extends Component {

    render() {
        // eslint-disable-next-line
        let tagList = this.props.tags.map((tag, i) => {
            if (tag !== "") {
                return <li className="list-group-item" key={i}><Link to={`/memes/search/${tag}`}>#{tag}</Link></li>
            }
        })

        return (
            <ul className="list-group list-group-horizontal">
                { tagList }
            </ul>
        )
    }
}

export default Hashtag