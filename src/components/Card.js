import React, {Component} from "react"
import '../App.css'
import data from "../data/data.js"

class Card extends Component{
    constructor() {
        super()
        this.state = {
            data: data,
            cardInfo: '',
            cardNumber: 0
            
        }
    }

    navNext() {
        if(this.state.cardNumber === data.length-1) {
            this.setState({ cardNumber: this.state.cardNumber - data.length + 1})
        }else{
            this.setState({ cardNumber: this.state.cardNumber + 1 })
        }
    }

    navPrevious() {
        if(this.state.cardNumber === 0) {
            this.setState({ cardNumber: this.state.cardNumber + data.length - 1})
        }else{
        this.setState({ cardNumber: this.state.cardNumber - 1 })
        }
    }

    render() {
        console.log(this.state.cardNumber)
        console.log(data.length)
        return(
            <div className="cardComp">

                <div className="card">
                    <div className="info">
                        <h1>{data[this.state.cardNumber].name.first}{data[this.state.cardNumber].name.last}</h1>

                        <div><span>From: </span>{`${data[this.state.cardNumber].city}, ${data[this.state.cardNumber].country}`}</div>
                        <div><span>Job Title: </span>{data[this.state.cardNumber].title}</div>
                        <div className="bubble"><span>Employer: </span>{data[this.state.cardNumber].employer}</div>

                        <span>Favorite Movies:</span>
                        <ol>
                            <li>{data[this.state.cardNumber].favoriteMovies[0]}</li>
                            <li>{data[this.state.cardNumber].favoriteMovies[1]}</li>
                            <li>{data[this.state.cardNumber].favoriteMovies[2]}</li>
                        </ol>
                    </div>

                    <div className="counter">
                        <h1>{`${this.state.cardNumber + 1}/${data.length}`}</h1>
                    </div>
                </div>

                <div className="nav">
                    <button className="prev" onClick={() => this.navPrevious()}>{"< Previous"}</button>
                    <button className="next" onClick={() => this.navNext()}>{"Next >"}</button>
                </div>

            </div>
        )
    }
}

export default Card