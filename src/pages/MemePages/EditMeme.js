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
                <img src={this.state.url ? this.state.url : 'Loading.....'}/>
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
                <button type="submit">Post It!</button>
                </form>
            </div>
        )
    }
}
