import React, { Component } from 'react';
import {Button} from 'reactstrap'
import RandomChar from './RandomChar/RandomChar';

export default class Random extends Component {

    state = {
        randomChar: true
    }

    onToggle = () => {
        this.setState((state) => ({
            randomChar: !state.randomChar
        }))
    }

    render() {
        const { randomChar } = this.state
        const toggleRandomChar = randomChar ? <RandomChar /> : null
        return (
            <>
                {toggleRandomChar}
                <Button onClick={this.onToggle}
                    color="primary"
                    size="lg"
                    block>
                    Toggle Character
                </Button>
            </>
        )
    }
}