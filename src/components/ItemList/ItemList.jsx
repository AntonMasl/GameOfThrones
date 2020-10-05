import React, { Component } from 'react';
import './ItemList.css';
import Spinner from '../Spinner/Spinner';



export default class ItemList extends Component {

    state = {
        itemList: null
    }
    componentDidMount() {
        const { getData } = this.props
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })

    }
    render() {

        if (!this.state.itemList) {
            return <Spinner />
        }

        const items = this.state.itemList.map((item, i) => {
            return <li key={i}
                className="list-group-item"
                onClick={item.gender ? this.props.onItemSelected.bind(this, 41 + i) : this.props.onItemSelected.bind(this, 1 + i)}>
                {item.name}
            </li>
        })

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}