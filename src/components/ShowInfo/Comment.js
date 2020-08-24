import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <>
                <p>{this.props.body}</p>
                <h5>{this.props.userPosted}</h5>
            </>
        )
    }
}
export default Comment