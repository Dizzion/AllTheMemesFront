import React, { Component } from 'react'
import MemeImg from '../../components/MemeImg'
import Comment from '../../components/ShowInfo/Comment'
import Hashtag from '../../components/ShowInfo/Hashtag'
import LikeDis from '../../components/ShowInfo/LikeDis'
import MemeModel from '../../model/MemesModel'
import NewComment from '../../components/ShowInfo/NewComment'

class MemeShow extends Component {
    state = {
        url: "",
        tags: [],
        likes: 0,
        disLikes: 0,
        comments: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        MemeModel.show(this.props.match.params.id)
            .then(data => this.setState({ 
                url: data.data.url,
                tags: data.data.hashTags,
                likes: data.data.likes,
                disLikes: data.data.disLikes,
                comments: data.data.comments
             }))
    }

    render() {
        let commentList = this.state.comments.map((comment, i) => {
            return <Comment {...comment} key={i}/>
        })
        return (
            <div>
                {this.state.url ? <MemeImg url={this.state.url} /> : 'Loading.....'}
                {this.state.tags ? <Hashtag tags={this.state.tags} /> : 'Loading.....'}
                {this.state.url ? <LikeDis likes={this.state.likes} dislikes={this.state.disLikes} /> : 'Loading.....'}
                <NewComment />
                {this.state.comments ? commentList : 'Loading.....'}
            </div>
        )
    }
}

export default MemeShow