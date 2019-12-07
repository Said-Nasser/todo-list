import React, { Component } from "react";
// import "./List.css";
import Item from './Item';
import { FaPlus } from 'react-icons/fa';

class List extends Component {
    state = {
        data: []
    }
    update = (newText, id) => {
        console.log('updating item at index ', id, newText);
        this.setState((prevState) => {
            return {
                data: prevState.data.map(item => item.id !== id ? item : { ...item, text: newText })
            }
        })
    }

    delete = (id) => {
        console.log('removing item at ', id);
        this.setState(prevState => {
            return { data: prevState.data.filter(item => item.id !== id) }
        })
    }
    add = (e) => {
        e.preventDefault()
        if (this.newText.value === '') return;
        this.setState(prevState => ({
            data: [
                ...prevState.data, {
                    id: this.nextId(),
                    text: this.newText.value
                }
            ]
        }), () => this.newText.value = '')
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return ++this.uniqueId;
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-9 col-lg-8">
                        <form onSubmit={this.add} className="add-todo">
                            <div className="form-row">
                                <div className="col-12">
                                    <div className="input-group">
                                        <input className="form-control rounded-0 border-right-0 font-weight-lighter p-3 p-sm-3 p-md-5" type="text" placeholder="Add New Item" ref={input => this.newText = input} />
                                        <div className="input-group-prepend">
                                            <button className="input-group-text btn btn-outline-light border- px-3 px-sm-4 px-md-5"><FaPlus /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ul className="m-0 p-0">
                            {this.state.data.map((item) => <Item text={item.text} key={item.id} index={item.id} onDelete={this.delete} onChange={this.update} />)}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }

}
export default List;
