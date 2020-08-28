import React, {Component} from 'react'
import MemeModel from '../../model/MemesModel'
import AuthService from '../../service/AuthService'

class NewComment extends Component {
    state = {
        body: "",
        userPosted: ""
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser()
        if (user && user.username) {
            this.setState({
                userPosted: user.username
            })
        } else {
            this.setState({
                userPosted: "Anonymous"
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handSubmit = (e) => {
        e.preventDefault()

        MemeModel.createCom(this.props.match.params.id ,this.state)
            .then(data => {
                this.props.history.push(`/memes/${this.props.match.params.id}`)
            })
    }

    render() {
        return (
            <div className="container mb-5">
                <h1 className="h3 mt-5 mb-3 font-weight-normal">New Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                        <label htmlFor="body">Body</label>
                        <textarea
                            className="form-control"
                            id="body"
                            name="body"
                            rows="4"
                            onChange={this.handleChange}
                            value={this.state.body} />
                        <label htmlFor="userPosted">User</label>
                        <input
                            className="form-control" 
                            id="userPosted"
                            type="text"
                            name="userPosted"
                            value={this.state.userPosted ? this.state.userPosted : 'Anonymous'}
                            readOnly />
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-secondary mb-2"
                    >Post Comment!</button>
                </form>
            </div>
        )
    }
}

export default NewComment