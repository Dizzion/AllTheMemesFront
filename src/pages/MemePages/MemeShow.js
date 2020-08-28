import React, { Component } from 'react'
import MemeImg from '../../components/MemeImg'
import Comment from '../../components/ShowInfo/Comment'
import Hashtag from '../../components/ShowInfo/Hashtag'
import LikeDis from '../../components/ShowInfo/LikeDis'
import MemeModel from '../../model/MemesModel'
import NewComment from '../../components/ShowInfo/NewComment'
import AuthService from '../../service/AuthService'

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

    handleClick = (e) => {
        e.preventDefault()
        MemeModel.delete(this.props.match.params.id)
            .then(data => this.props.history.push('/memes'))
    }

    increaseLikes = async (e) => {
        e.preventDefault()
        await this.setState({likes: this.state.likes + 1})
        await MemeModel.likes(this.props.match.params.id, this.state)
            .then(res => this.props.history.push(`/memes/${this.props.match.params.id}`))
    }

    increaseDislikes = async (e) => {
        e.preventDefault()
        await this.setState({disLikes: this.state.disLikes + 1})
        await MemeModel.disLikes(this.props.match.params.id, this.state)
            .then(res => this.props.history.push(`/memes/${this.props.match.params.id}`))
    }

    render() {
        let commentList = this.state.comments.map((comment, i) => {
            return <Comment {...comment} key={i}/>
        })
        const user = AuthService.getCurrentUser()
        return (
            <div className="container">
                {user && (user.roles[0] === "ROLE_MODERATOR" || user.roles[0] === "ROLE_ADMIN"
                        || user.roles[1] === "ROLE_MODERATOR" || user.roles[1] === "ROLE_ADMIN"
                        || user.roles[2] === "ROLE_MODERATOR" || user.roles[2] === "ROLE_ADMIN") ?
                    <button className="btn btn-md btn-danger btn-block mt-3" onClick={this.handleClick}>Delete!</button>
                :
                    <></>}
                {this.state.url ? <MemeImg url={this.state.url} /> : 'Loading.....'}
                {this.state.tags ? <Hashtag tags={this.state.tags} memeId={this.props.match.params.id}/> : 'Loading.....'}
                {this.state.url ? <LikeDis increaseLikes={this.increaseLikes} likes={this.state.likes} increaseDislikes={this.increaseDislikes} dislikes={this.state.disLikes} /> : 'Loading.....'}
                <NewComment />
                <div className="card-group">{this.state.comments ? commentList : 'Loading.....'}</div>
            </div>
        )
    }
}

export default MemeShow