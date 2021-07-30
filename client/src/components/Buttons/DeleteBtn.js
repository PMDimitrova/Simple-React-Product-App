import {deleteBook} from "../../services/bookService";

const DeleteBtn = (props) => {

    const onDeleteButtonClick = () => {
        console.log(props.books);

        deleteBook(props.idToDelete);
    }
    return(
        <button onClick={onDeleteButtonClick}>DELETE</button>
    )
}
export default DeleteBtn;