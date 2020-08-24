import React, { Component } from 'react'
import MemesModel from '../model/MemesModel'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        memes: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        MemesModel.all().then(data => this.setState({ memes: data.data }))
    }

    render() {
        let memeList = this.state.memes.map((meme, i) => {
            return <Link to={`/memes/${ meme.id }`} key={i}>
                <MemeImg url={meme.url} />
            </Link>
        })
        return (
            <div>
                {this.state.memes ? memeList : 'Loading.....' }
            </div>
        )
    }
}

export default Home