import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ItemDetails, { Field } from '../ItemDetails/ItemDetails';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ItemList from '../ItemList/ItemList';
import GotService from '../../services/gotService';




export default class CharactersPage extends Component {
    gotService = new GotService()
    state = {
        selectedItem: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
        console.log(id);
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
        return (
            <Row>
                <Col md='6'>
                    <ItemList
                        onItemSelected={this.onItemSelected}
                        getData={this.gotService.getAllCharacters}
                    />
                </Col>
                <Col md='6'>
                    <ItemDetails itemId={this.state.selectedItem}
                        getData={this.gotService.getCharacter}>
                        <Field field='gender' label="Gender" />
                        <Field field='born' label="Born" />
                        <Field field='died' label="Died" />
                        <Field field='culture' label="Culture" />
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
}