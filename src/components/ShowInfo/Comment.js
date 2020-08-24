import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <>
                <p>{this.props.comments.body}</p>
                <h5>{this.props.comments.userPosted}</h5>
            </>
        )
    }
}
export default Comment