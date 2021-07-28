import {Component, Fragment} from "react";
import * as bookService from "../../services/bookService"

import style from "./ShowBooks.css"

class ShowBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        bookService.getAll()
            .then(res => this.setState({books: res}));
    }

    componentDidUpdate(prevProps, prevState) {
        bookService.getAll()
            .then(res => {
                this.setState({pets: res})
            });
    }

    renderTableData(){
        return this.state.books.map(book =>{
            const {id,title, author, year, language} = book;
            return(
                <tr key="`${id}`">
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{year}</td>
                    <td>{language}</td>
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
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Language</th>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </Fragment>
        )

    }

}

export default ShowBooks;