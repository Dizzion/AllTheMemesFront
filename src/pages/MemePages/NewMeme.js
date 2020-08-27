import React, { Component } from 'react'
import MemeModel from '../../model/MemesModel'

export default class NewMeme extends Component {
    state = {
        url: "",
        hashTags: ['','','','',''],
        likes: 0,
        disLikes: 0,
        isTrending: false
    }

    handleChange = (e) => {
        let hashTags = [...this.state.hashTags]
        let tag
        if (e.target.name === "tag1") {
            tag = {...hashTags[0]}
            tag = e.target.value
            hashTags[0] = tag
            this.setState({hashTags})
        } else if (e.target.name === "tag2") {
            tag = {...hashTags[1]}
            tag = e.target.value
            hashTags[1] = tag
            this.setState({hashTags})
        } else if (e.target.name === "tag3") {
            tag = {...hashTags[2]}
            tag = e.target.value
            hashTags[2] = tag
            this.setState({hashTags})
        } else if (e.target.name === "tag4") {
            tag = {...hashTags[3]}
            tag = e.target.value
            hashTags[3] = tag
            this.setState({hashTags})
        } else if (e.target.name === "tag5") {
            tag = {...hashTags[4]}
            tag = e.target.value
            hashTags[4] = tag
            this.setState({hashTags})
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let hashTags = []
        this.state.hashTags.forEach((tag) => {
            if (tag !== '') hashTags.push(tag)
        })
        this.setState({hashTags})
        MemeModel.create(this.state)
            .then(data => this.props.history.push('/memes'))
    }

    render() {
        return (
            <div className="container-fluid mt-5">
                <h2>Submit a New Meme!</h2>
                <img src={this.state.url} alt=""/>
                <form className="form-signin form-col" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                        <label for="url">URL:</label>
                        <input
                            placeholder="URL"
                            type="text"
                            name="url"
                            id="url"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.url} />
                    </div>
                    <div className="form-label-group">
                        <label for="tag1">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag1"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[0] : 'Loading.....'} />
                    </div>
                    <div className="form-label-group">
                        <label for="tag2">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag2"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[1] : 'Loading.....'} />
                    </div>
                    <div className="form-label-group">
                        <label for="tag3">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag3"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[2] : 'Loading.....'} />
                    </div>
                    <div className="form-label-group">
                        <label for="tag4">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag4"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[3] : 'Loading.....'} />
                    </div>
                    <div className="form-label-group">
                        <label for="tag5">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag5"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags ? this.state.hashTags[4] : 'Loading.....'} />
                    </div>
                    <button className="btn btn-lg btn-success btn-block" type="submit">Post It!</button>
                </form>
            </div>
        )
    }
} 