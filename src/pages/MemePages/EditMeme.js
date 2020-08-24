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
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        MemeModel.update(this.state)
            .then(data => this.props.history.push(`/memes/${this.props.match.params.id}`))
    }

    render() {
        return (
            <div>
                <h2>Edit the HashTags of this Meme</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                    <label htmlFor="tags">Hashtags:</label>
                    <ul name="tags">
                        <li><input
                            type="text"
                            name="tag1"
                            onChange={this.handleChange}
                            value={ this.state.hashTags ? this.state.hashTags[0] : 'Loading.....' } />
                        </li>
                        <li><input
                            type="text"
                            name="tag2"
                            onChange={this.handleChange}
                            value={ this.state.hashTags ? this.state.hashTags[1] : 'Loading.....' } />
                        </li>
                        <li><input
                            type="text"
                            name="tag3"
                            onChange={this.handleChange}
                            value={ this.state.hashTags ? this.state.hashTags[2] : 'Loading.....' } />
                        </li>
                        <li><input
                            type="text"
                            name="tag4"
                            onChange={this.handleChange}
                            value={ this.state.hashTags ? this.state.hashTags[3] : 'Loading.....' } />
                        </li>
                        <li><input
                            type="text"
                            name="tag5"
                            onChange={this.handleChange}
                            value={ this.state.hashTags ? this.state.hashTags[4] : 'Loading.....' } />
                        </li>
                    </ul>
                </div>
                </form>
            </div>
        )
    }
}
