import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from "jquery";

import './Item.css';
import { FaTrash } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaThList } from 'react-icons/fa';
import { FiSave } from "react-icons/fi";

class Item extends Component {


    state = {
        editing: false
    }

    addFocusStyle = (event) => {
        console.log($(ReactDOM.findDOMNode(this)).children())
        $(ReactDOM.findDOMNode(this)).children().css({
            boxShadow: '0px 0px 5px -1px rgb(0, 0, 0) inset',
            borderColor: '#000'
        })
    }
    showDeleteIcon = (event) => {
        console.log('in');
        $(ReactDOM.findDOMNode(this)).children('.delete').animate({
            opacity: 1
        }, 300)
    }
    hideDeleteIcon = (event) => {
        console.log('in');
        $(ReactDOM.findDOMNode(this)).children('.delete').animate({
            opacity: 0
        }, 300)
    }
    done = (event) => {
        if (event.target.checked) {
            $(ReactDOM.findDOMNode(this)).children('p').css({
                textDecoration: 'line-through',
                textDecorationColor: '#adb5bd',
                color: '#adb5bd'
            })
        } else {
            $(ReactDOM.findDOMNode(this)).children('p').css({
                textDecoration: 'none',
                color: '#000'
            })
        }
    }
    save = () => {
        this.props.onChange(this._newText.value, this.props.index)
        this.setState((prevState) => {
            return { editing: false }
        })
    }
    edit = () => {
        this.setState((prevState) => {
            return { editing: true }
        }, () => {
            this._newText.focus()
            this._newText.select()
        })

    }
    remove = () => {
        this.props.onDelete(this.props.index)
    }


    renderEditingForm = () => {
        return (
            <li>
                <form onSubmit={this.save} className="edit-todo">
                    <div className="form-row">
                        <div className="col-12">
                            <div className="input-group save">
                                <input className="form-control rounded-0 border-0 p-4" type="text"
                                    ref={input => this._newText = input} defaultValue={this.props.text}
                                    onFocus={this.addFocusStyle}/>
                                <div className="input-group-prepend">
                                    <button className="input-group-text btn btn-outline-light border-0"><FiSave /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>


            </li>
        );
    }

    renderItem = () => {
        return (
            <li className="d-flex border-bottom" onMouseEnter={this.showDeleteIcon} onMouseLeave={this.hideDeleteIcon}>
                <button className="drag btn btn-default text-secondary rounded-0 border-0 align-self-start">
                    <FaThList />
                </button>
                <div className="custom-control custom-checkbox align-self-start">
                    <input type="checkbox" className="custom-control-input" id={`customCheck${this.props.index}`} onChange={this.done} />
                    <label className="custom-control-label" htmlFor={`customCheck${this.props.index}`}></label>
                </div>
                <button className="delete btn btn-default text-danger ml-3 rounded-0 border-0 align-self-start"
                    onClick={this.remove} >
                    <FaTrash />
                </button>
                <p className="m-0 flex-fill px-4 py-2 h5 font-weight-lighter align-self-start">
                    {this.props.text}
                </p>
                <button className="edit btn btn-default text-success rounded-0 border-0 align-self-start" onClick={this.edit}>
                    <FaPencilAlt />
                </button>
            </li>
        );
    }
    render() {
        return this.state.editing ? this.renderEditingForm() : this.renderItem();
    }

}
export default Item;