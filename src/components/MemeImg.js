import React, { Component } from 'react'

class MemeImg extends Component {
    render() {
        return (
            <div className="col mb-2 mt-5">
                <div className="card">
                    <img className="card-img img-fluid" src={this.props.url} alt="Meme Broken" />
                </div>
            </div>
        )
    }
}

export default MemeImg