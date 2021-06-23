import React, { Component } from 'react'

export default class Opinion extends Component { 

    state = {
        bullishCount: 0, 
        bearishCount: 0
    }
    

   

    bullish = () => {
        this.setState( prevState => {
            return {bullishCount: prevState.bullishCount + 1}
        })
    }  

    bearish = () => {
        this.setState( prevState => {
            return{ bearishCount: prevState.bearishCount + 1}
        })
    }



    render() {
        return (
            <div>
                <div><button onClick={this.bullish}>Bullish: {this.state.bullishCount}</button></div>
                <div><button onClick={this.bearish}>Bearish: {this.state.bearishCount}</button></div>
            </div>
        )
    }
}
