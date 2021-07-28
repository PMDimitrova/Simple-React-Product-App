import {Component, Fragment} from "react";
import * as bookService from "../../services/bookService"

import style from "./Bookshelf.css"
import InputForm from "../InputForm/InputForm";
import TableData from "./TableData";

class Bookshelf extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            create: true,
            read: true,
            update: true,
            delete: true
        }
    }

    componentDidMount() {
        bookService.getAll()
            .then(res => this.setState({books: res}));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.books.length !== this.state.books.length) {
            bookService.getAll()
                .then(res => {
                    this.setState({books: res})
                });
        }
    }

    addNewBook() {
        if (this.state.create) {
            return (
                <InputForm permission={this.state.create}/>
            )
        } else {
            return (
                <p>You cannot add new book to the shelf!</p>
            )
        }
    }

    renderTheWholeTable() {
        if (this.state.read) {
            return (
                <Fragment>
                    <h2>**Your Books**</h2>
                    <table className="bookshelf" style={style}>
                        <tbody>
                        <tr>
                            <th>TITLE</th>
                            <th>AUTHOR</th>
                            <th>YEAR</th>
                            <th>LANGUAGE</th>
                            <th>ACTIONS</th>
                        </tr>
                        <TableData books={this.state.books} update={this.state.update} delete={this.state.delete}/>
                        </tbody>
                    </table>
                </Fragment>
            )
        }else{
            return (
                <p>Sadly you have no permission to see the content of the bookshelf</p>
            )
        }
    }

    render() {
        return(
            <Fragment>
                {this.addNewBook()}
                {this.renderTheWholeTable()}
            </Fragment>
        )
    }

}

export default Bookshelf;