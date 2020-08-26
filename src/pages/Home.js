import React, { Component } from 'react'
import MemesModel from '../model/MemesModel'
import { Link } from 'react-router-dom'
import MemeImg from '../components/MemeImg'

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
            <div className="card-group row row-cols-1 row-cols-md-4 container-fluid mt-5">
                {this.state.memes ? memeList : 'Loading.....' }
            </div>
        )
    }
}

export default Home