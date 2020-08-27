import React, { Component } from 'react'

class LikeDis extends Component {

    render() {
        return (
            <div className="container">
                <div className="row row-col-2 align-items-center">
                    <p className="col"><img className="rounded-circle img-thumbnail" onClick={this.props.increaseLikes} src="/like-flat.png" alt="Likes"/> 
                    </p><p className="col">{this.props.likes}</p>
                    <p className="col"><img className="rounded-circle img-thumbnail" onClick={this.props.increaseDislikes} src="/dislike-flat.png" alt="Dislikes"/>
                    </p><p className="col">{this.props.dislikes}</p>
                </div>    
            </div>
        )
    }
}


export default LikeDis