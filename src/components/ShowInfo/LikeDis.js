import React, { Component } from 'react'

class LikeDis extends Component {

    // handleOnClickLike = (e) => {

    // }
    render() {
        return (
            <div>
                <img src="/like-flat.png" alt="Likes">{' '}{this.props.likes}</img>
                <img src="/dislike-flat.png" alt="Dislikes">{' '}{this.props.dislikes}</img>
            </div>
        )
    }
}


export default LikeDis