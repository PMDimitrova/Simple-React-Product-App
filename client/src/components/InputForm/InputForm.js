import {Fragment} from "react";
import * as bookService from '../../services/bookService';
import Bookshelf from "../ShowBooks/Bookshelf";

const InputForm = () => {
    const onSubmitBookHandler = (e) => {
        e.preventDefault();

        const {title, author, year, language } = e.target;

        bookService.create(title.value, author.value, year.value, language.value);
    };

    const currentYear = new Date().getFullYear();

    return(
        <Fragment>
            <h2>**New Book Form**</h2>
            <form onSubmit={onSubmitBookHandler}>
                <fieldset>
                    <legend>Please fill the book details here:</legend>
                    <label htmlFor="bookTitle">Title:</label>
                    <input type="text" name="title" id="bookTitle" placeholder="Title"/>

                    <label htmlFor="bookAuthor">Author:</label>
                    <input type="text" name="author" id="bookAuthor" placeholder="Author"/>

                    <label htmlFor="bookYear">Year bought:</label>
                    <input type="number" name="year" id="bookYear" placeholder="2000" min="1990" max={currentYear}/>

                    <label htmlFor="prodPrice">Book language:</label>
                    <select name="language" id="language">
                    <option value="Bulgarian" selected>Bulgarian</option>
                    <option value="English">English</option>
                    <option value="German">German</option>
                </select>
                    <input className="button" type="submit" value="Add book to shelf"/>

                </fieldset>
            </form>

        </Fragment>
    )
}
export default InputForm;
