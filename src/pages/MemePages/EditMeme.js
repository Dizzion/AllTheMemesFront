import React, { Component } from 'react'
import MemeModel from '../../model/MemesModel'

export default class EditMeme extends Component {
    state = {
        url: "",
        hashTags: ['', '', '', '', ''],
        likes: 0,
        disLikes: 0,
        isTrending: false
    }

    componentDidMount() {
        this.fetchData()
        if (this.state.likes > (this.state.disLikes + 5) || this.state.hashTags.length > 3) {
            this.setState({ isTrending: true })
        } else {
            this.setState({ isTrending: false })
        }
    }

    fetchData = () => {
        MemeModel.show(this.props.match.params.id)
            .then(data => this.setState({
                url: data.data.url,
                hashTags: data.data.hashTags,
                likes: data.data.likes,
                disLikes: data.data.disLikes,
                isTrending: data.data.isTrending
            }))
    }

    handleChange = (e) => {
        let hashTags = [...this.state.hashTags]
        let tag
        if (e.target.name === "tag1") {
            tag = { ...hashTags[0] }
            tag = e.target.value
            hashTags[0] = tag
            this.setState({ hashTags })
        } else if (e.target.name === "tag2") {
            tag = { ...hashTags[1] }
            tag = e.target.value
            hashTags[1] = tag
            this.setState({ hashTags })
        } else if (e.target.name === "tag3") {
            tag = { ...hashTags[2] }
            tag = e.target.value
            hashTags[2] = tag
            this.setState({ hashTags })
        } else if (e.target.name === "tag4") {
            tag = { ...hashTags[3] }
            tag = e.target.value
            hashTags[3] = tag
            this.setState({ hashTags })
        } else if (e.target.name === "tag5") {
            tag = { ...hashTags[4] }
            tag = e.target.value
            hashTags[4] = tag
            this.setState({ hashTags })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let hashTags = []
        this.state.hashTags.forEach((tag) => {
            if (tag !== '') hashTags.push(tag)
        })
        this.setState({hashTags})
        MemeModel.update(this.state)
            .then(data => this.props.history.push(`/memes/${this.props.match.params.id}`))
    }

    render() {
        return (
            <div className="container">
                <img src={this.state.url ? this.state.url : 'Loading.....'}  alt=""/>
                <h1 className="h3 mt-5 mb-3 font-weight-normal">Edit the Hashtags of this Meme</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inline">
                    <div className="form-group">
                        <label htmlFor="tag1">#</label>
                        <input
                            type="text"
                            name="tag1"
                            className="form-control mr-2"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[0] : 'Loading.....'} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag2">#</label>
                        <input
                            type="text"
                            name="tag2"
                            className="form-control mr-2"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[1] : 'Loading.....'} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag3">#</label>
                        <input
                            type="text"
                            name="tag3"
                            className="form-control mr-2"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[2] : 'Loading.....'} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag4">#</label>
                        <input
                            type="text"
                            name="tag4"
                            className="form-control mr-2"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[3] : 'Loading.....'} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag5">#</label>
                        <input
                            type="text"
                            name="tag5"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[4] : 'Loading.....'} />
                    </div>
                    </div>
                    <button className="btn btn-lg btn-secondary mt-4" type="submit">Post It!</button>
                </form>
            </div>
        )
    }
}
