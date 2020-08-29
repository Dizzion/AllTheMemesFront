import React, { Component } from 'react'
import './LikeDis.scss'

class LikeDis extends Component {

    render() {
        return (
            <div className="container">
                <div className="row row-col-2 align-items-center">
                    <img className="col rounded-circle img-thumbnail" onClick={this.props.increaseLikes} src="/like-flat.png" alt="Likes"/> 
                    <p className="col img-tag">{this.props.likes}</p>
                    <div className="col col-lg-2"></div>
                    <img className="col rounded-circle img-thumbnail" onClick={this.props.increaseDislikes} src="/dislike-flat.png" alt="Dislikes"/>
                    <p className="col img-tag">{this.props.dislikes}</p>
                    
                </div>    
            </div>
        )
    }
}


export default LikeDis