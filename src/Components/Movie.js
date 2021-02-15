import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        return (
            <div>
                <h1>name : {this.props.name}</h1>
                <h2>Hero : {this.props.hero}</h2>
                <p>Category : {this.props.category}</p>
                <p>Budject : {this.props.budject}</p>
            </div>
        )
    }
}
