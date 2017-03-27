import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);

        //props.play = true;
        this.state = {counter: 0};

        this.toggleCounter = this.toggleCounter.bind(this);
    }

    timerId = 0;

    componentDidMount() {
        this.initCounter();
    }

    componentWillUnmount() {
        this.stopCounter();
    }

    tick() {
        this.setState((prevState, props) => {
            if (props.play === false) {
                return prevState;
            }

            let multiplier = props.multiplier || Math.floor(Math.random() * 2 + 1);

            return { counter: (prevState.counter + multiplier) % 10 };
        });
    }

    toggleCounter() {
        if (this.timerId === 0) {
            this.initCounter();
        } else {
            this.stopCounter();
        }
    }

    initCounter() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 500);
    }

    stopCounter() {
        clearInterval(this.timerId);
        this.timerId = 0;
    }

    render() {
        return (
            <div 
                className="card" 
                id={this.props.cardId}
                onClick={this.toggleCounter}>{this.state.counter}</div>
        );
    }
}

export default Card;