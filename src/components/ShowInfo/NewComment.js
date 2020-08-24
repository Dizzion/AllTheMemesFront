import React, {Component} from 'react'
import MemeModel from '../../model/MemesModel'

class NewComment extends Component {
    state = {
        body: "",
        userPosted: ""
    }

    componentDidMount() {
        if (this.props.user.username === null || this.props.user.username === undefined) {
            this.setState({
                userPosted: "Anonymous"
            })
        } else {
            this.setState({
                userPosted: this.props.user.username
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

        MemeModel.createCom(this.state)
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