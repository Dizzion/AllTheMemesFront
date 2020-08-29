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

    handleSubmit = async (e) => {
        e.preventDefault()
        let hashTags = []
        await this.state.hashTags.forEach((tag) => {
            if (tag !== '') hashTags.push(tag)
        })
        await this.setState({hashTags})
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
                        <label htmlFor="url">URL:</label>
                        <input
                            placeholder="URL"
                            type="text"
                            name="url"
                            id="url"
                            required
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.url} />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="tag1">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag1"
                            required
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags[0]} />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="tag2">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag2"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags[1]} />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="tag3">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag3"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags[2]} />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="tag4">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag4"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags[3]} />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="tag5">Hashtag:</label>
                        <input
                            placeholder="#"
                            type="text"
                            name="tag5"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.hashTags[4]} />
                    </div>
                    <button className="btn btn-lg btn-success btn-block" type="submit">Post It!</button>
                </form>
            </div>
        )
    }
} 