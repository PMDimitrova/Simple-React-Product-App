import {Component, Fragment} from "react";
import * as bookService from "../../services/bookService";
import * as permissionService from "../../services/permissionService";

import style from "./Bookshelf.css"
import TableData from "./TableData";
import {Link} from "react-router-dom";

class Bookshelf extends Component {
    constructor(props) {
        super(props);

        const create = permissionService.isCreateEnabled();

        this.state = {
            books: [],
            create: create,
            read: true,
            update: true,
            delete: true
        }
    }

    componentDidMount() {
        bookService.getAll()
            .then(res => this.setState({books: res}));
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.books.length !== this.state.books.length) {
    //         bookService.getAll()
    //             .then(res => {
    //                 this.setState({books: res})
    //             });
    //     }
    // }

    addNewBook() {
        if (this.state.create) {
            return (<Fragment>
                <h2>***If you want to add new book</h2>
                <h3>please click <Link to="/add-book" permission={this.state.create}>here</Link>***</h3>
            </Fragment>
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
                <Fragment>
                    <h2>**Your Books**</h2>
                    <p>Sadly you have no permission to see the content of the bookshelf</p>
                </Fragment>
            )
        }
    }

    render() {
        return(
            <Fragment>
                {this.renderTheWholeTable()}
                {this.addNewBook()}
            </Fragment>
        )
    }

}

export default Bookshelf;