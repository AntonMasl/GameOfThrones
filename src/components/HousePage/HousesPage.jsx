import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ItemDetails, { Field } from '../ItemDetails/ItemDetails';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ItemList from '../ItemList/ItemList';
import GotService from '../../services/gotService';




export default class HousesPage extends Component {
    gotService = new GotService()
    state = {
        selectedItem: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
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
                        getData={this.gotService.getAllHouses}
                    />
                </Col>
                <Col md='6'>
                    <ItemDetails itemId={this.state.selectedItem}
                        getData={this.gotService.getHouse}>
                        <Field field='name' label="Name" />
                        <Field field='region' label="Region" />
                        <Field field='words' label="Words" />
                        <Field field='overlord' label="Overlord" />
                        <Field field='coatOfArms' label="Coat of arms" />
                    </ItemDetails>
                </Col>
            </Row>
        )
    }
}