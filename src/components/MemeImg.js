import React, { Component } from 'react'

class MemeImg extends Component {
    render() {
        return (
            <>
                <img src={this.props.url} alt="Meme Image Broken"/>
            </>
        )
    }
}

export default MemeImg