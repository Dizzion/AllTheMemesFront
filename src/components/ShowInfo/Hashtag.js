import React from 'react'
import {Link} from 'react-router-dom'

async function Hashtag() {

    let tagList = await this.props.tags.map((tag) => {
        <li><Link to={`/memes/search/${tag}`}>#{tag}</Link></li>
    })

    return (
        <ul>
            { tagList }
        </ul>
    )
}

export default Hashtag