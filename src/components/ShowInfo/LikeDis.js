import React, { Component } from 'react'

class LikeDis extends Component {

    // handleOnClickLike = (e) => {

    // }
    render() {
        return (
            <div>
                <button onClick={this.props.increaseLikes}>
                    <img src="/like-flat.png" alt="Likes"/>
                    <p>{this.props.likes}</p>
                </button>
                
                <button onClick={this.props.increaseDislikes}>
                    <img src="/dislike-flat.png" alt="Dislikes"/>
                    <p>{this.props.dislikes}</p>
                </button>
            </div>
        )
    }
}


export default LikeDis