import {Link} from "react-router-dom";

const EditBook = (props) => {
    let editingBook = props.location.param1;

    const onUpdateHandler = () => {
        console.log('here');
    }
    return (
        <form onSubmit={onUpdateHandler}>
            <fieldset>
                <legend>Update details:</legend>
                <label htmlFor="bookTitle">Title:</label>
                <input type="text" name="title" id="bookTitle" value={editingBook.title} />

                <label htmlFor="bookAuthor">Author:</label>
                <input type="text" name="author" id="bookAuthor" value={editingBook.author}/>

                <label htmlFor="bookYear">Year bought:</label>
                <input type="number" name="year" id="bookYear" value={editingBook.year}/>

                <label htmlFor="prodPrice">Book language:</label>
                <select name="language" id="language" value={editingBook.language}>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="English">English</option>
                    <option value="German">German</option>
                </select>
                <input className="button" type="submit" value="Update Book"/>
            </fieldset>
        </form>
    )
}
export default EditBook;