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
        isTrending: false,
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
                isTrending: data.data.isTrending,
                comments: data.data.comments
             }))
    }

    increaseLikes = (e) => {
        e.preventDefault()
        this.setState({likes: this.state.likes + 1})
        MemeModel.likes(this.props.match.params.id, this.state)
            .then(res => this.props.history.push(`/memes/${this.props.match.params.id}`))
    }

    increaseDislikes = (e) => {
        e.preventDefault()
        this.setState({disLikes: this.state.disLikes + 1})
        MemeModel.likes(this.props.match.params.id, this.state)
            .then(res => this.props.history.push(`/memes/${this.props.match.params.id}`))
    }

    render() {
        let commentList = this.state.comments.map((comment, i) => {
            return <Comment {...comment} key={i}/>
        })
        return (
            <div>
                {this.state.url ? <MemeImg url={this.state.url} /> : 'Loading.....'}
                {this.state.tags ? <Hashtag tags={this.state.tags} /> : 'Loading.....'}
                {this.state.url ? <LikeDis increaseLikes={this.increaseLikes} likes={this.state.likes} increaseDislikes={this.increaseDislikes} dislikes={this.state.disLikes} /> : 'Loading.....'}
                <NewComment />
                {this.state.comments ? commentList : 'Loading.....'}
            </div>
        )
    }
}

export default MemeShow