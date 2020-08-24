import React, {Component} from 'react'
import MemeModel from '../../model/MemesModel'
import { getCurrentUser } from '../../service/AuthService'

class NewComment extends Component {
    state = {
        body: "",
        userPosted: ""
    }

    componentDidMount() {
        if (getCurrentUser() === null || getCurrentUser() === undefined) {
            this.setState({
                userPosted: "Anonymous"
            })
        } else {
            this.setState({
                userPosted: getCurrentUser()
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
            <div>
                <h4>New Comment</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="body">Body:</label>
                        <textarea
                            id="body"
                            name="body"
                            onChange={this.handleChange}
                            value={this.state.body} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="userPosted">User:</label>
                        <input 
                            id="userPosted"
                            type="text"
                            name="userPosted"
                            value={this.state.userPosted ? this.state.userPosted : 'Anonymous'}
                            readOnly />
                    </div>
                </form>
            </div>
        )
    }
}

export default NewComment