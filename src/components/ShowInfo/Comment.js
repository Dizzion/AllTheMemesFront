import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <div className="card" id="comments">
                <div className="card-body">
                    <h5 className="card-title">{this.props.userPosted}</h5>
                    <p className="card-text">{this.props.body}</p>
                </div>
            </div>
        )
    }
}
export default Comment