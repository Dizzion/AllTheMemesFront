import React, { Component } from 'react'

export default class NewMeme extends Component {
    state = {
        url: "",
        hashTags: ['','','','',''],
        likes: 0,
        disLikes: 0,
        isTrending: false
    }

    handleChange = (e) => {
        if (e.target.name === "tag1") {    
            this.state.hashTags[0] = e.target.value 
        } else if (e.target.name === "tag2") {
            this.state.hashTags[1] = e.target.value
        } else if (e.target.name === "tag3") {
            this.state.hashTags[2] = e.target.value
        } else if (e.target.name === "tag4") {
            this.state.hashTags[3] = e.target.value
        } else if (e.target.name === "tag5") {
            this.state.hashTags[4] = e.target.value
        }else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Submit a New Meme!</h2>
                    <div className="form-input">
                        <label htmlFor="url">URL:</label>
                        <input
                            type="text"
                            name="url"
                            onChange={this.handleChange}
                            value={this.state.url} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="tags">Hashtags:</label>
                        <ul name="tags">
                            <li><input
                                    type="text"
                                    name="tag1"
                                    onChange={this.handleChange}
                                    value={this.state.hashTags[0]} />
                            </li>
                            <li><input
                                    type="text"
                                    name="tag2"
                                    onChange={this.handleChange}
                                    value={this.state.hashTags[1]} />
                            </li>
                            <li><input
                                    type="text"
                                    name="tag3"
                                    onChange={this.handleChange}
                                    value={this.state.hashTags[2]} />
                            </li>
                            <li><input
                                    type="text"
                                    name="tag4"
                                    onChange={this.handleChange}
                                    value={this.state.hashTags[3]} />
                            </li>
                            <li><input
                                    type="text"
                                    name="tag5"
                                    onChange={this.handleChange}
                                    value={this.state.hashTags[4]} />
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
} 