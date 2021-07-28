import {Component, Fragment} from "react";
import * as bookService from "../../services/bookService"

import style from "./Bookshelf.css"
import DeleteBtn from "../Buttons/DeleteBtn";
import UpdateBtn from "../Buttons/UpdateBtn";
import {deleteAvailability} from "../../services/permissionService";

class Bookshelf extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            // create: true,
            // read: true,
            update: true,
            delete: true
        }
    }

    componentDidMount() {
        bookService.getAll()
            .then(res => this.setState({books: res}));

    }

    componentShouldUpdate(){
        bookService.getAll()
            .then(res => this.setState({books: res}));
    }

    // componentDidUpdate(prevProps, prevState) {
    //     bookService.getAll()
    //         .then(res => {
    //             this.setState({books: res})
    //         });
    // }

    deleteBtn() {
        if (this.state.delete)
            return (
                <DeleteBtn/>
            )
    }

    updateBtn() {
        if (this.state.update)
            return (
                <UpdateBtn/>
            )
    }

    noActionsPossible() {
        if (!this.state.update && !this.state.delete) {
            return (
                <tr>Update/Delete options unavailable</tr>
            )

        }
    }

    renderTableData() {
        return this.state.books.map(book => {
            const {id, title, author, year, language} = book;
            return (
                <tr key={id}>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{year}</td>
                    <td>{language}</td>
                    <td>
                        {this.updateBtn()}
                        {this.deleteBtn()}
                        {this.noActionsPossible()}
                    </td>
                </tr>
            )
        })

    }

    render() {
        return (
            <Fragment>
                <p>Your Books</p>
                <table className="bookshelf" style={style}>
                    <tbody>
                    <tr>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>YEAR</th>
                        <th>LANGUAGE</th>
                        <th>ACTIONS</th>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </Fragment>
        )

    }

}

export default Bookshelf;