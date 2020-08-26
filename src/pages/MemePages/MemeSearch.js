import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MemeImg from '../../components/MemeImg'
import MemeModel from '../../model/MemesModel'

class MemeSearch extends Component {
    state = {
        memes: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        MemeModel.search(this.props.match.params.hashtag)
            .then(data => this.setState({
                memes: data.data
            }))
    }
    render() {
        let memeList
        if (this.state.memes) {
            memeList = this.state.memes.map((meme, i) => {
                return <Link to={`/memes/${meme.id}`} key={i}>
                    <MemeImg url={meme.url} />
                </Link>
            })
        }
        return (
            <>
                {this.state.memes ? memeList : 'No Memes Found with that Tag!'}
            </>
        )
    }
}

export default MemeSearch