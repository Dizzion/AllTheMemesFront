import React, { Component } from 'react'

class MemeImg extends Component {
    render() {
        return (
            <>
                <img src={this.props.url} alt="Meme Broken"/>
            </>
        )
    }
}

export default MemeImg