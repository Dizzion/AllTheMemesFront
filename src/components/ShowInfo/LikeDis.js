import React, { Component } from 'react'

class LikeDis extends Component {

    // handleOnClickLike = (e) => {

    // }
    render() {
        return (
            <div>
                <img src="/like-flat.png" alt="Likes"/>
                <p>{this.props.likes}</p>
                <img src="/dislike-flat.png" alt="Dislikes"/>
                <p>{this.props.dislikes}</p>
            </div>
        )
    }
}


export default LikeDis