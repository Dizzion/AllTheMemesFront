import React, { Component } from 'react'

class LikeDis extends Component {

    // handleOnClickLike = (e) => {

    // }
    render() {
        return (
            <div>
                    <p><img className="rounded-circle img-thumbnail" onClick={this.props.increaseLikes} src="/like-flat.png" alt="Likes"/> 
                    {this.props.likes}</p>
                    <p><img className="rounded-circle img-thumbnail" onClick={this.props.increaseDislikes} src="/dislike-flat.png" alt="Dislikes"/>
                    {this.props.dislikes}</p>
            </div>
        )
    }
}


export default LikeDis