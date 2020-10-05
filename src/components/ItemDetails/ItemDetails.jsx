import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import './ItemDetails.css';


const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export { Field }


export default class ItemDetails extends Component {
    state = {
        item: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevsProps) {
        if (prevsProps.itemId !== this.props.itemId) {
            this.updateItem()
        }
    }
    ItemLoading() {
        this.setState({
            loading: true
        })
    }
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateItem() {
        if (!this.props.itemId) {
            return
        }
        const { getData } = this.props
        this.ItemLoading()
        getData(this.props.itemId)
            .then(item => {
                this.setState({
                    item,
                    loading: false
                })
            })
            .catch(this.onError)

    }

    render() {
        const { item, loading, error } = this.state
        if (!item && !error) {

            return <div className="select-error">please select from the list</div>
        }
        const errorMessage = error ? <ErrorMessage /> : null
        const spinner = loading ? <Spinner /> : null
        const content = !(loading || error) ? <Content item={item} children={this.props.children} /> : null

        return (
            <div className="item-details rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const Content = (props) => {
    const { item } = props
    return (
        <>
            <h4>{item.name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, { item }) //сделали клон филда (так как реакт элементы не измеяемые) и добавили сойсвто char
                    }) //вернули массив элементов
                }
                {/* <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li> */}
            </ul>
        </>
    )
}