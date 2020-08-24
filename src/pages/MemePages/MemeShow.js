import React, { Component } from 'react'
import MemeImg from '../../components/MemeImg'
import Comment from '../../components/ShowInfo/Comment'
import Hashtag from '../../components/ShowInfo/Hashtag'
import LikeDis from '../../components/ShowInfo/LikeDis'
import MemeModel from '../../model/MemesModel'
import NewComment from '../../components/ShowInfo/NewComment'

class MemeShow extends Component {
    state = {
        meme: {}
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        MemeModel.show(this.props.match.params.id)
            .then(data => this.setState({ meme: data.data }))
    }

    render() {
        let commentList = this.state.meme.comments.map(comment => {
            return <Comment {...comment}/>
        })
        return (
            <div>
                {this.state.meme ? <MemeImg url={this.state.meme.url} /> : 'Loading.....'}
                {this.state.meme ? <Hashtag tags={this.state.meme.hashTags} /> : 'Loading.....'}
                {this.state.meme ? <LikeDis likes={this.state.meme.likes} dislikes={this.state.meme.disLikes} /> : 'Loading.....'}
                <NewComment user={JSON.parse(sessionStorage.getItem("user"))}/>
                {this.state.meme ? commentList : 'Loading.....'}
            </div>
        )
    }
}

export default MemeShow