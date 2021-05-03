import React, { Component } from 'react'

export default class Picture extends Component {
    render() {
        console.log(this.props.imageUrl)
        return (
            <>
                <h1>Picture</h1>
                <img src={this.props.imageUrl} style={{ width: '200px' }} />
            </>
        )
    }
}
